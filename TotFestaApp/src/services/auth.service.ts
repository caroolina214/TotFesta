import { users, mockPasswords, roles } from "@/types/mocks/user.mock";
import type { Role, User } from "@/types/User";

export type AuthSession = {
    user: User;
    role: Role;
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