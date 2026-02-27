import Btn from '@/components/common/Btn';
import OrderCard from '@/components/cards/OrderCard';
import Txt from '@/components/common/Txt';
import { deleteClient } from '@/services/client.service';
import { getOrdersByClient } from '@/services/order.service';
import { GeneralStyles } from '@/styles/General.styles';
import { clients } from '@/types/mocks/client.mock';
import { Order } from '@/types/Order';
import { Stack, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';
import { Button, Dialog, Divider, FAB, Icon, IconButton, Portal, useTheme } from 'react-native-paper';

export default function DetallClient() {

    const theme = useTheme();
    const isDark = theme.dark;
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    const { id } = useLocalSearchParams();
    const [client, setClient] = useState<any | null>(null);

    const [orders, setOrders] = useState<Order[]>([]);

    const [errorClientVisible, setErrorClientVisible] = useState(false);
    const [errorClientMsg, setErrorClientMsg] = useState("");

    const [isLoading, setIsLoading] = useState(true);
    const [errorOrderMsg, setErrorOrderMsg] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const loadOrders = async () => {
            try {
                setErrorOrderMsg(null);
                setIsLoading(true);

                const data = await getOrdersByClient(Number(id))

                if (!isMounted) return;

                setOrders(data);
            } catch (error) {
                if (!isMounted) return;
                setErrorOrderMsg("No s'han pogut carregar els pedidos del client.");
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
            <View style={{ alignItems: 'center' }}>
                <ActivityIndicator />
                <Txt variant='labelLarge'>Carregant pedidos…</Txt>
            </View>
            ;
    } else if (errorOrderMsg) {
        content =
            <View style={{ alignItems: 'center' }}>
                <Icon size={40} source={'alert-circle-outline'} />
                <Txt variant='bodyMedium' style={{ color: theme.colors.error }}>{errorOrderMsg}</Txt>
            </View>
            ;
    } else if (orders.length === 0) {
        content =
            <View style={{ alignItems: 'center', margin: 10, }}>
                <Icon size={40} source={'package-variant'} color={theme.colors.surfaceVariant} />
                <Txt variant='bodyMedium' style={{ paddingTop: 15, color: theme.colors.surfaceVariant }}>Este client no te cap pedido</Txt>
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

    useEffect(() => {
        const c = clients.find(c => c.id === Number(id));
        setClient(c ?? null);
    }, [id]);

    useFocusEffect(
        useCallback(() => {
            const c = clients.find(c => c.id === Number(id));
            setClient(c ?? null);
        }, [id])
    );

    if (!client) return <Txt>Client no trobat</Txt>;

    const handleEdit = () => {
        router.push(`/clients/ClientDataPage?mode=edit&id=${client.id}`);
    };

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const handleDelete = async () => {
        try {
            const ok = await deleteClient(client.id);

            if (ok) {
                hideDialog();
                router.back();
            }

        } catch (err: any) {
            if (err.code === "CLIENT_HAS_ORDERS") {
                hideDialog();
                setErrorClientMsg(err.message);
                setErrorClientVisible(true);
            } else {
                console.error(err);
                setErrorClientMsg("Error inesperat eliminant el client.");
                setErrorClientVisible(true);

            }
        }
    };

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Detall del client",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: theme.colors.background,   // fons del header
                    },
                    headerTintColor: theme.colors.onSurface,     // color del text i icones
                    headerTitleStyle: {
                        color: theme.colors.onSurface,            // color del títol
                    },
                    headerShadowVisible: true,
                }}

            />
            <View style={{ padding: 25, backgroundColor: theme.colors.background, height: '100%' }}>
                <Txt variant='headlineSmall' style={{ marginTop: 20 }}>{client.fullName}</Txt>

                <Divider style={GeneralStyles.divider} />

                {/* NIF/CIF */}
                {client.nifCif && (
                    <View style={[GeneralStyles.row, { paddingVertical: 10 }]}>
                        <Icon source="card-account-details" size={20} />
                        <Txt variant='bodyLarge' style={GeneralStyles.paddingTextAfterIcon}>NIF/CIF: {client.nifCif}</Txt>
                    </View>
                )}

                {/* TELÈFON */}
                {client.phone && (
                    <View style={[GeneralStyles.row, { paddingVertical: 10 }]}>
                        <Icon source="phone" size={20} />
                        <Txt variant='bodyLarge' style={GeneralStyles.paddingTextAfterIcon}>Telèfon: {client.phone}</Txt>
                    </View>
                )}

                {/* EMAIL */}
                {client.email && (
                    <View style={[GeneralStyles.row, { paddingVertical: 10 }]}>
                        <Icon source="email" size={20} />
                        <Txt variant='bodyLarge' style={GeneralStyles.paddingTextAfterIcon}>Email: {client.email}</Txt>
                    </View>
                )}

                {/* NOTES */}
                {client.notes && (
                    <View style={[GeneralStyles.row, { paddingVertical: 10 }]}>
                        <Icon source="note-text" size={20} />
                        <Txt variant='bodyLarge' style={GeneralStyles.paddingTextAfterIcon}>Notes: {client.notes}</Txt>
                    </View>
                )}

                {/* ACTIU */}
                <View style={[GeneralStyles.row, { paddingVertical: 10 }]}>
                    <Icon source={client.active ? "check-circle" : "close-circle"} size={20} />
                    <Txt variant='bodyLarge' style={GeneralStyles.paddingTextAfterIcon}>Actiu: {client.active ? "Sí" : "No"} </Txt>
                </View>

                {/* PEDIDOS */}
                <View style={{ marginTop: 50, }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>

                        <Divider style={[GeneralStyles.divider, { flex: 1, marginRight: 5 }]} />
                        <Txt variant="labelLarge" style={{ marginBottom: 10 }}>
                            Pedidos del client
                        </Txt>
                        <Divider style={[GeneralStyles.divider, { flex: 1, marginLeft: 5 }]} />
                    </View>

                    <View>
                        {content}
                    </View>
                </View>

                <Portal>
                    <Dialog
                        visible={errorClientVisible}
                        onDismiss={() => setErrorClientVisible(false)}
                        style={{ backgroundColor: theme.colors.onPrimary }}>
                        <Dialog.Title style={{ color: theme.colors.error }}>
                            Error
                        </Dialog.Title>

                        <Dialog.Content>
                            <Text>{errorClientMsg}</Text>
                        </Dialog.Content>

                        <Dialog.Actions>
                            <Button onPress={() => setErrorClientVisible(false)} textColor={theme.colors.primary}>
                                Tancar
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Portal>
                    <Dialog style={{ backgroundColor: theme.colors.onPrimary }} visible={visible} onDismiss={hideDialog} >
                        <Dialog.Title style={{ color: theme.colors.primary }}>Confirmació</Dialog.Title>
                        <Dialog.Content>
                            <Text>Segur que vols eliminar aquest client?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog} textColor={theme.colors.primary}>Cancel·lar</Button>
                            <Button onPress={handleDelete} textColor={theme.colors.error}>
                                Eliminar
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <IconButton
                icon="pencil"
                onPress={handleEdit}
                size={28}
                style={[GeneralStyles.btnIconTopRight, { position: "absolute", top: 35, right: 70 }]}
                iconColor={
                    isDark ?
                        (theme.colors as any).onQuaternary
                        : (theme.colors as any).quaternary}
            />

            <IconButton
                icon="delete"
                onPress={showDialog}
                size={28}
                style={[GeneralStyles.btnIconTopRight, { position: "absolute", top: 35, right: 20 }]}
                iconColor={
                    isDark ?
                        (theme.colors as any).onQuaternary
                        : (theme.colors as any).quaternary}
            />

        </>
    );
}