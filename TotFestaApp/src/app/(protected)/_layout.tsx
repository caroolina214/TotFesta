import { Redirect, Stack } from "expo-router";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export default function ProtectedLayout() {
    const authState = useContext(AuthContext);

    if (!authState.isReady) {
        return null;
    }

    if (!authState.isLoggedIn) {
        return <Redirect href="/LoginPage" />;
    }

    return (

        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
        </Stack>

    );
}