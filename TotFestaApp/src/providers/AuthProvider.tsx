import { loginMocks } from "@/services/auth.service";
import { useUserStore } from "@/stores/user.store";
import { useRouter, useSegments } from "expo-router";
import { createContext, useEffect, useMemo, useState } from "react";

type AuthContextType = {
    isReady: boolean;
    isLoggedIn: boolean;
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    isReady: false,
    isLoggedIn: false,
    logIn: async () => { },
    logOut: () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const segments = useSegments();

    // llegim l'estat de zustand
    const user = useUserStore.use.user();
    const role = useUserStore.use.role();
    const token = useUserStore.use.token();
    const setUserStore = useUserStore.use.setUser();
    const clearUserStore = useUserStore.use.clearUser();

    // estat derivat -> useMemo es per a memoritzar un valor calculat
    // en este cas, calcula si hi ha user i si hi ha token -> true
    // si falta alguno -> false
    // es recalcula cada vegada que canvia user o token
    const isLoggedIn = useMemo(() => Boolean(user && token), [user, token]);

    // Hidratació del store -> es per a carregar l'estat persistent dins del store
    const [isHydrated, setIsHydrated] = useState(
        typeof useUserStore.persist?.hasHydrated === "function"
            ? useUserStore.persist.hasHydrated()
            : true
    );

    // useEffect es un hook de React que s’executa després de 
    // renderitzar el component o quan canvien les dependències

    // Este en concret el que fa es avisar quan zustand acaba de
    // carregar l'estat guardat. S'executa quan canvia isHydrated
    useEffect(() => {
        if (isHydrated) return;

        const unsub =
            typeof useUserStore.persist?.onFinishHydration === "function"
                ? useUserStore.persist.onFinishHydration(() => setIsHydrated(true))
                : null;

        return () => {
            if (typeof unsub === "function") unsub();
        };
    }, [isHydrated]);

    // Quan el store està hidratat → ja podem navegar
    const isReady = isHydrated;

    // Navegació protegida (redireccions automàtiques)
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
        setUserStore(session.user, session.role, session.token);
    };

    // Funció de logout
    const logOut = () => {
        clearUserStore();
        router.replace("/LoginPage");
    };

    return (
        <AuthContext.Provider value={{ isReady, isLoggedIn, logIn, logOut, }}>
            {children}
        </AuthContext.Provider>
    );
}
