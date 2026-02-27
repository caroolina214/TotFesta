import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { PaperProvider } from "react-native-paper";
import { lightTheme, darkTheme } from "../theme/appTheme";
import { useColorScheme } from "react-native";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextValue = {
    themeMode: ThemeMode;
    setThemeMode: (mode: ThemeMode) => void;
    isDark: boolean;
    theme: any
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const systemScheme = useColorScheme(); // "light" | "dark"
    const [themeMode, setThemeModeState] = useState<ThemeMode>("system");

    const setThemeMode = useCallback((mode: ThemeMode) => {
        setThemeModeState(mode);
    }, []);

    const isDark = useMemo(() => {
        if (themeMode === "system") {
            return systemScheme === "dark";
        }
        return themeMode === "dark";
    }, [themeMode, systemScheme]);

    const theme = useMemo(() => {
        return isDark ? darkTheme : lightTheme;
    }, [isDark]);

    const value = useMemo(() => (
        {
            themeMode,
            setThemeMode,
            isDark,
            theme,
        }),
        [themeMode, setThemeMode, isDark, theme]
    );

    return (
        <ThemeContext.Provider value={value}>
            <PaperProvider theme={theme}>{children}</PaperProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useThemeContext must be used within ThemeProvider");
    return ctx;
}