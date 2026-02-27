import { ThemeProvider } from "@/providers/ThemeProvider";
import { Tabs } from "expo-router";
import { Icon, useTheme } from "react-native-paper";

export default function BottomMenuTabsLayout() {
    const theme = useTheme();
    const isDark = theme.dark;

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: isDark ? (theme.colors as any).onQuinary : (theme.colors as any).quinary,
            tabBarInactiveTintColor: theme.colors.surfaceVariant,
            tabBarStyle: {
                backgroundColor: isDark ? (theme.colors as any).onQuinaryContainer : (theme.colors as any).quinaryContainer,
                borderTopColor: isDark ? (theme.colors as any).onQuinaryContainer : (theme.colors as any).quinaryContainer,
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
                name="clients"
                options={{
                    title: "Clients",
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="account-multiple" color={color} size={size} />
                    ),
                }}
            />
            {/* 
            <Tabs.Screen
                name="UserPage"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="account-circle-outline" color={color} size={size} />
                    ),
                }}
            /> */}

        </Tabs>
    );
}