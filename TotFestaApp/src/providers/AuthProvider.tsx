import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import type { User, Role } from "@/types/User";
import { loginMocks } from "@/services/auth.service";

type AuthContextType = {
    isReady: boolean;
    isLoggedIn: boolean;
    user: User | null;
    role: Role | null;
    token: string | null;
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    isReady: false,
    isLoggedIn: false,
    user: null,
    role: null,
    token: null,
    logIn: async () => { },
    logOut: () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const segments = useSegments();

    // Estat global
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState<Role | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const isLoggedIn = useMemo(() => Boolean(user && token), [user, token]);
    const [isReady, setIsReady] = useState(false);

    // Simula "carregar sessió" ja encara no hi ha persistencia
    useEffect(() => {
        setIsReady(true);
    }, []);

    // Redireccions automàtiques
    useEffect(() => {
        if (!isReady) return;

        const inProtectedGroup = segments[0] === "(protected)";

        if (!isLoggedIn && inProtectedGroup) {
            router.replace("/LoginPage");
            return;
        }

        if (isLoggedIn && !inProtectedGroup) {
            router.replace("/(protected)");
        }
    }, [isLoggedIn, isReady, router, segments]);

    // Funció de login (crida al service)
    const logIn = async (email: string, password: string) => {
        const session = await loginMocks(email, password);

        setUser(session.user);
        setRole(session.role);
        setToken(session.token);

        // El provider ja farà la redirecció automàtica
    };

    // Funció de logout
    const logOut = () => {
        setUser(null);
        setRole(null);
        setToken(null);
        router.replace("/LoginPage");
    };

    return (
        <AuthContext.Provider
            value={{
                isReady,
                isLoggedIn,
                user,
                role,
                token,
                logIn,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Hook per a usar el context
export const useAuth = () => useContext(AuthContext);