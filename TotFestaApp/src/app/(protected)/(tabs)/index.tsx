import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { GeneralStyles } from '../../../styles/General.styles';
import Txt from '../../../components/Txt';
import { Divider, useTheme } from 'react-native-paper';
import OrderCard from '@/components/OrderCard';
import { getAllOrders } from '@/services/order.service';
import { loginStyles } from '@/styles/LoginPage.styles';
import DiscoBall from '@/components/DiscoBall';

export default function HomePage() {
    const theme = useTheme();
    const isDark = theme.dark;
    const orders = getAllOrders();

    return (
        <View style={[GeneralStyles.body, { flex: 1, backgroundColor: theme.colors.background }]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <DiscoBall />
                <Txt variant="displaySmall" style={{ textAlign: 'center', marginTop: 25, marginBottom: 15 }}>Inici</Txt>
            </View>
            <Txt variant="headlineSmall" style={{ textAlign: 'center' }}>Llistat de Pedidos</Txt>
            <Divider style={GeneralStyles.divider} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={orders}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <OrderCard order={item} />
                    )}
                    contentContainerStyle={{ alignItems: "center" }}
                />
            </View>
        </View>
    );
}
