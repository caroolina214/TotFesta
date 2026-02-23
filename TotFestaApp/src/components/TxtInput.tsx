import React from "react";
import { View } from "react-native";
import { HelperText, TextInput, useTheme } from "react-native-paper";

type TxtInputProps = React.ComponentProps<typeof TextInput> & { errorText?: string; };

export default function TxtInput({ style, theme: overrideTheme, errorText, ...props }: TxtInputProps) {
    const theme = useTheme();
    const isDark = theme.dark;
    const hasError = Boolean(errorText);

    return (
        <View>
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
            <HelperText type="error" visible={hasError}>
                {errorText}
            </HelperText>
        </View>
    );
}