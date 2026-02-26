import DiscoBall from '@/components/common/DiscoBall';
import OrderCard from '@/components/cards/OrderCard';
import Txt from '@/components/common/Txt';

import { getAllOrders } from '@/services/order.service';
import { GeneralStyles } from '@/styles/General.styles';
import { Order } from '@/types/Order';

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Divider, Icon, useTheme } from 'react-native-paper';

export default function HomePage() {
    const theme = useTheme();

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const loadOrders = async () => {
            try {
                setErrorMessage(null);
                setIsLoading(true);

                const data = await getAllOrders();

                if (!isMounted) return;

                setOrders(data);
            } catch (error) {
                if (!isMounted) return;
                setErrorMessage("No s'han pogut carregar els pedidos.");
            } finally {
                if (!isMounted) return;
                setIsLoading(false);
            }
        };

        loadOrders();

        return () => {
            isMounted = false;
        };
    }, []);

    let content;

    if (isLoading) {
        content =
            <View style={[GeneralStyles.body, { alignItems: 'center' }]}>
                <ActivityIndicator />
                <Txt variant='labelLarge'>Carregant pedidos…</Txt>
            </View>
            ;
    }

    if (errorMessage) {
        content =
            <View style={[GeneralStyles.body, { alignItems: 'center' }]}>
                <Icon size={40} source={'alert-circle-outline'} />
                <Txt variant='bodyMedium' style={{ color: theme.colors.error }}>{errorMessage}</Txt>
            </View>
            ;
    }

    if (orders.length === 0) {
        content =
            <View style={[GeneralStyles.body, { alignItems: 'center' }]}>
                <Icon size={40} source={'package-variant'} color={theme.colors.surfaceVariant} />
                <Txt variant='bodyMedium' style={{ color: theme.colors.surfaceVariant }}>No hi ha pedidos per a mostrar</Txt>
            </View>
            ;
    } else {
        content =
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <OrderCard order={item} />
                )}
                contentContainerStyle={{ alignItems: "center" }}
            />
            ;
    }

    return (
        <View style={[GeneralStyles.body, { flex: 1, backgroundColor: theme.colors.background }]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <DiscoBall />
                <Txt variant="displaySmall" style={{ textAlign: 'center', marginTop: 5, marginBottom: 15 }}>Inici</Txt>
            </View>
            <Txt variant="headlineSmall" style={{ textAlign: 'center' }}>Llistat de Pedidos</Txt>
            <Divider style={GeneralStyles.divider} />

            <View style={{ flex: 1 }}>
                {content}
            </View>
        </View>
    );
}
