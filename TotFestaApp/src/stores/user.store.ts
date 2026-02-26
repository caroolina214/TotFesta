import { createSelectors } from "@/stores/createSelectors";
import { Role, User } from "@/types/User";
import { Platform } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

type UserState = {
    user: User | null;
    role: Role | null;
    token: string | null;

    setUser: (user: User | null, role: Role | null, token?: string | null) => void;
    clearUser: () => void;
};

// Zustand sempre necessita un store, pero com hi ha situacions en les que 
// pot no haver un store disponible, este noopStorage es com un storage
// "fantasma" que evita errors (per exemple quan el codi s'executa abans 
// que window estiga disponible, o quan no hi ha cap window).
const noopStorage: StateStorage = {
    getItem: async () => null,
    setItem: async () => { },
    removeItem: async () => { },
};

// Implementació de localStorage per a web
const webStorage: StateStorage = {
    getItem: async (name) =>
        typeof window === "undefined" ? null : window.localStorage.getItem(name),
    setItem: async (name, value) => {
        if (typeof window === "undefined") return;
        window.localStorage.setItem(name, value);
    },
    removeItem: async (name) => {
        if (typeof window === "undefined") return;
        window.localStorage.removeItem(name);
    },
};

// Implementacií segura per a mòbil
const nativeSecureStorage: StateStorage = {
    getItem: async (name) => {
        const SecureStore = require("expo-secure-store") as typeof import("expo-secure-store");
        const value = await SecureStore.getItemAsync(name);
        return value ?? null;
    },
    setItem: async (name, value) => {
        const SecureStore = require("expo-secure-store") as typeof import("expo-secure-store");
        await SecureStore.setItemAsync(name, value);
    },
    removeItem: async (name) => {
        const SecureStore = require("expo-secure-store") as typeof import("expo-secure-store");
        await SecureStore.deleteItemAsync(name);
    },
};

// Decideix automaticament quin storage usar segons la plataforma
const storage = createJSONStorage(() => {
    if (Platform.OS === "web") {
        return typeof window !== "undefined" ? webStorage : noopStorage;
    }
    return nativeSecureStorage;
});

export const useUserStore = createSelectors(
    create<UserState>()(
        persist(    // per a que el store es guarde de forma automatica
            (set) => ({
                user: null,
                role: null,
                token: null,

                // actualitza l'estat complet d'autenticació
                setUser: (user, role, token) =>
                    set((state) => ({
                        user,
                        role,
                        token: token !== undefined ? token : state.token,
                    })),

                // borra la sessió
                clearUser: () => set({ user: null, role: null, token: null }),
            }),
            {
                name: "user-data-storage",
                storage,

                // indica que es guarda en persistència
                partialize: (state) => ({
                    user: state.user,
                    role: state.role,
                    token: state.token,
                }),
            }
        )
    )
);