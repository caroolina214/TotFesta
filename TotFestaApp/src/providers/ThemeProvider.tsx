import React, { createContext, useContext, useMemo, useState } from "react";
import { PaperProvider } from "react-native-paper";
import { lightTheme, darkTheme } from "../theme/appTheme";

type ThemeContextValue = {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false);

    const theme = useMemo(() => {
        return isDark ? darkTheme : lightTheme;
    }, [isDark]);


    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <PaperProvider theme={theme}>{children}</PaperProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useThemeContext must be used within ThemeProvider");
    return ctx;
}