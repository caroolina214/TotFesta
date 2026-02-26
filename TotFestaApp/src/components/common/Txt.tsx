import React from "react";
import { Text, useTheme } from "react-native-paper";

type TxtProps = React.ComponentProps<typeof Text>;

export default function Txt({ variant = "bodyMedium", style, ...props }: TxtProps) {
    const theme = useTheme();
    const isDark = theme.dark;

    const colorByVariant: Record<string, string> = {
        displayLarge: isDark ? (theme.colors as any).onQuinary : (theme.colors as any).quinary,
        displayMedium: isDark ? (theme.colors as any).onQuinary : (theme.colors as any).quinary,
        displaySmall: isDark ? (theme.colors as any).onQuinary : (theme.colors as any).quinary,

        headlineLarge: isDark ? theme.colors.onPrimaryContainer : theme.colors.primary,
        headlineMedium: isDark ? theme.colors.onPrimaryContainer : theme.colors.primary,
        headlineSmall: isDark ? theme.colors.onPrimaryContainer : theme.colors.primary,

        titleLarge: isDark ? (theme.colors as any).quaternaryContainer : (theme.colors as any).quaternary,
        titleMedium: isDark ? (theme.colors as any).quaternaryContainer : (theme.colors as any).quaternary,
        titleSmall: isDark ? (theme.colors as any).quaternaryContainer : (theme.colors as any).quaternary,

        bodyLarge: theme.colors.onSurface,
        bodyMedium: theme.colors.onSurface,
        bodySmall: theme.colors.onSurface,

        labelLarge: isDark ? theme.colors.secondary : theme.colors.onSecondaryContainer,
        labelMedium: isDark ? theme.colors.secondary : theme.colors.onSecondaryContainer,
        labelSmall: isDark ? theme.colors.secondary : theme.colors.onSecondaryContainer,
    };

    return (
        <Text
            variant={variant}
            style={[
                {
                    color: colorByVariant[variant],
                },
                style,
            ]}
            {...props}
        />
    );
}