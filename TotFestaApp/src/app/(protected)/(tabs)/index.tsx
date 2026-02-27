import OrderCard from '@/components/cards/OrderCard';
import WelcomeCard from '@/components/cards/WelcomeCard';
import DiscoBall from '@/components/common/DiscoBall';
import Txt from '@/components/common/Txt';
import { getAllOrders } from '@/services/order.service';
import { useUserStore } from '@/stores/user.store';
import { GeneralStyles } from '@/styles/General.styles';
import { Order } from '@/types/Order';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Divider, Icon, useTheme } from 'react-native-paper';

export default function HomePage() {
    const theme = useTheme();
    const user = useUserStore.use.user();

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

    var labelUserName;

    if (!user) {
        labelUserName = ""
    } else {
        labelUserName = user.name;
    }

    return (
        <View style={[
            GeneralStyles.body,
            {
                backgroundColor: theme.colors.background,
                justifyContent: 'space-around',
                alignItems: 'center'
            }
        ]}>
            <View style={{ alignSelf: 'center' }}>
                <DiscoBall size={160} />
            </View>
            <WelcomeCard userName={labelUserName} />

            <View style={{ width: '100%', marginTop: 60 }}>
                <Txt variant="headlineSmall" style={{ textAlign: 'center' }}>Llistat de Pedidos</Txt>
                <Divider style={GeneralStyles.divider} />
            </View>
            {content}
        </View>
    );
}
