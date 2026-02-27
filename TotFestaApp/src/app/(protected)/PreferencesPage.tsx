import Txt from "@/components/common/Txt";
import { useThemeContext } from "@/providers/ThemeProvider";
import { GeneralStyles } from "@/styles/General.styles";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Divider, IconButton, RadioButton, useTheme } from "react-native-paper";

export default function PreferencesPage() {
    const theme = useTheme();
    const isDark = theme.dark;
    const { themeMode, setThemeMode } = useThemeContext();
    const router = useRouter();

    return (
        <View style={[GeneralStyles.body, { backgroundColor: theme.colors.background }]}>
            <View>
                <View style={[GeneralStyles.row, { justifyContent: 'space-between' }]}>
                    <Txt variant="headlineMedium">Preferències</Txt>
                    <IconButton
                        icon="keyboard-backspace"
                        onPress={() => router.back()}
                        size={32}
                        iconColor={theme.colors.onPrimaryContainer}
                    />
                </View>
                <Divider style={GeneralStyles.divider} />
            </View>
            <Txt variant="titleMedium" style={{ marginBottom: 10 }}>
                Tema de l'aplicació
            </Txt>

            <RadioButton.Group
                onValueChange={(value) => setThemeMode(value as "light" | "dark" | "system")}
                value={themeMode}
            >
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    <RadioButton value="light" color={theme.colors.onSecondary} />
                    <Txt variant="bodyLarge">Clar</Txt>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    <RadioButton value="dark" color={theme.colors.secondary} />
                    <Txt variant="bodyLarge">Fosc</Txt>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton value="system" color={isDark ? theme.colors.secondary : theme.colors.onSecondary} />
                    <Txt variant="bodyLarge">Sistema</Txt>
                </View>
            </RadioButton.Group>
        </View>
    );
}