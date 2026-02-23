import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

export default function BottomMenuTabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
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