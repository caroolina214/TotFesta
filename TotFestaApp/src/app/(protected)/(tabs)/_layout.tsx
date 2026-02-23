import { ThemeProvider } from "@/providers/ThemeProvider";
import { Tabs } from "expo-router";
import { Icon, useTheme } from "react-native-paper";

export default function BottomMenuTabsLayout() {
    const theme = useTheme();
    const isDark = theme.dark;

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: isDark ? theme.colors.tertiary : theme.colors.secondary,
            tabBarInactiveTintColor: isDark ? theme.colors.onTertiaryContainer : theme.colors.surfaceVariant,
            tabBarStyle: {
                backgroundColor: isDark ? theme.colors.surfaceVariant : theme.colors.onSecondary,
                borderTopColor: isDark ? theme.colors.surfaceVariant : theme.colors.onSecondary,
            },

        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inici",
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="home" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="clients/ClientsListPage"
                options={{
                    title: "Clients",
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="account-multiple" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="UserPage"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="account-circle-outline" color={color} size={size} />
                    ),
                }}
            />

        </Tabs>
    );
}