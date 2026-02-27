import { supabase } from "@/config/supabaseClient";
import { users, mockPasswords, roles } from "@/types/mocks/user.mock";
import type { Role, Employee, RoleName } from "@/types/Employee";

export type AuthSession = {
    user: Employee;
    role: Role | undefined;
    token: string;
};

export const loginMocks = async (email: string, password: string): Promise<AuthSession> => {

    const normalizedEmail = email.trim().toLowerCase();
    const user = users.find(u => u.email.toLowerCase() === normalizedEmail);

    if (!user) {
        throw new Error("Usuari o contrasenya incorrectes.");
    }

    const expectedPassword = mockPasswords[user.id];

    if (!expectedPassword || expectedPassword !== password) {
        throw new Error("Usuari o contrasenya incorrectes.");
    }

    const role = roles.find(r => r.id === user.roleId);

    if (!role) {
        throw new Error("Rol d'usuari no trobat.");
    }

    const fakeToken = `mock-token-${user.id}-${Date.now()}`;

    return { user, role, token: fakeToken, };
};

type UserProfileRow = {
    id: string; //uuid
    id_employee: number;
    role_id: number;
    full_name: string;
    email: string;
    roles: {
        id: number;
        name: RoleName;
        description: string | null;
    };
};

const mapProfile = (data: UserProfileRow) => {
    const roleData = data.roles;

    return {
        user: {
            id: data.id,
            id_employee: data.id_employee,
            role_id: data.role_id,
            full_name: data.full_name,
            email: data.email,
            // created_at: data.created_at ?? undefined,
            roles: roleData ? {
                id: roleData.id,
                name: roleData.name,
                description: roleData.description ?? undefined,
            } : undefined
        },
        role: roleData ? {
            id: roleData.id,
            name: roleData.name,
            description: roleData.description ?? undefined,
        } : undefined
    };
};

export const fetchProfileByAuthId = async (authUserId: string) => {
    console.log("Buscant perfil per a UUID:", authUserId);
    const { data, error } = await supabase
        .from("employees")
        .select("id, id_employee, role_id, full_name, email,  roles ( id, name, description )")
        .eq("id", authUserId)
        .single();

    console.log("\nResultat Supabase data:", data);
    console.log("Supabase error:", error);

    if (error || !data) {
        throw new Error("No s'ha trobar el perfil de l'usuari.");
    }

    return mapProfile(data as unknown as UserProfileRow);
};

export const login = async (email: string, password: string): Promise<AuthSession> => {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
    });

    if (authError || !authData.session || !authData.user) {
        throw new Error("Usuario o contrasenya incorrectes.");
    }
    const { user, role } = await fetchProfileByAuthId(authData.user.id);

    return {
        user,
        role,
        token: authData.session.access_token,
    };
};