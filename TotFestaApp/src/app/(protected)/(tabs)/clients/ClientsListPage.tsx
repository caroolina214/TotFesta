import { FlatList, View } from "react-native";
import Txt from "../../../../components/Txt";
import { GeneralStyles } from "../../../../styles/General.styles";
import { Divider, FAB, Searchbar, useTheme } from "react-native-paper";
import { useRouter, useFocusEffect } from "expo-router";
import React, { useState } from "react";
import { getClients } from "@/services/client.service";
import { Client } from "@/types/Client";
import ClientCard from "@/components/ClientCard";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";


export default function ClientsPage() {
    const theme = useTheme();
    const isDark = theme.dark;
    const [searchQuery, setSearchQuery] = useState('');
    const [clients, setClients] = useState<Client[]>([]);
    const router = useRouter();

    // Carregar clients quan la pantalla es mostra
    useFocusEffect(
        React.useCallback(() => {
            getClients().then(setClients);
        }, [])
    );

    const filteredClients = clients.filter(c => {
        const q = searchQuery.toLowerCase();

        return (
            c.fullName.toLowerCase().includes(q) ||
            c.email?.toLowerCase().includes(q) ||
            c.phone?.toLowerCase().includes(q)
        );
    });

    return (
        <View style={[GeneralStyles.body, { backgroundColor: theme.colors.background }]}>
            <Txt variant="headlineMedium" style={{ marginTop: 40 }}>Llistat de Clients</Txt>
            <Divider style={{ marginVertical: 15, height: 1.5 }} />
            <Searchbar
                placeholder="Buscar client per nom..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={{ marginBottom: 10, backgroundColor: theme.colors.inversePrimary }}
            />
            <FlatList
                data={filteredClients}
                keyExtractor={(client) => client.id.toString()}
                renderItem={({ item }) => <ClientCard client={item} />}
                contentContainerStyle={{ alignItems: "center" }}
            />

            <View
                style={{
                    position: "absolute",
                    bottom: 15,
                    right: 20,
                    borderRadius: 30,
                    elevation: 6,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <FAB
                    icon="plus" mode="flat"
                    onPress={() => router.push('/clients/ClientDataPage?mode=create')}
                    style={{ backgroundColor: isDark ? theme.colors.onPrimaryContainer : theme.colors.primary, }}
                    color={isDark ? theme.colors.primary : theme.colors.onPrimary}
                />
            </View>

        </View>
    );
}