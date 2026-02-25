import { Stack } from "expo-router";

export default function ClientLayout() {
    return (
        <Stack initialRouteName="ClientsListPage" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="ClientDataPage"
                options={{ presentation: "modal" }}
            />
            <Stack.Screen name="[id]" />
        </Stack>
    );
}