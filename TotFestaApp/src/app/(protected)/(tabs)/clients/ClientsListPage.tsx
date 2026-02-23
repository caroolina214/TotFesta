import { FlatList, View } from "react-native";
import Txt from "../../../../components/Txt";
import { GeneralStyles } from "../../../../styles/General.styles";
import { Divider, FAB, Searchbar, useTheme } from "react-native-paper";
import { useRouter, useFocusEffect } from "expo-router";
import React, { useState } from "react";
import { getClients } from "@/services/client.service";
import { Client } from "@/types/Client";
import ClientCard from "@/components/ClientCard";


export default function ClientsPage() {
    const theme = useTheme();
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
            <Txt variant="titleLarge" style={{ marginTop: 40 }}>Llistat de Clients</Txt>
            <Divider style={{ marginVertical: 15 }} />
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

            <FAB icon="plus" style={{
                position: "absolute",
                bottom: 20,
                right: 20,
            }}
            />

        </View>
    );
}