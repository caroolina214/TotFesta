import React from "react";
import { TextInput, useTheme } from "react-native-paper";

type TxtInputProps = React.ComponentProps<typeof TextInput>;

export default function TxtInput({ style, theme: overrideTheme, ...props }: TxtInputProps) {
    const theme = useTheme();
    const isDark = theme.dark;

    return (
        <TextInput
            {...props}
            theme={{
                colors: {
                    primary: isDark ? theme.colors.onPrimary : theme.colors.onPrimaryContainer,
                    outline: isDark ? theme.colors.onPrimaryContainer : theme.colors.onPrimaryContainer,
                    onSurface: isDark ? theme.colors.onPrimary : theme.colors.onPrimaryContainer,
                    onSurfaceVariant: isDark ? theme.colors.onPrimary : theme.colors.onPrimaryContainer,
                    background: isDark ? theme.colors.primary : theme.colors.onPrimary,
                },
            }}
            style={[style]}
        />
    );
}