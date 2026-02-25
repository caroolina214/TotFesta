import Txt from '@/components/Txt';
import { deleteClient } from '@/services/client.service';
import { GeneralStyles } from '@/styles/General.styles';
import { clients } from '@/types/mocks/client.mock';
import { Stack, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Dialog, Divider, FAB, Icon, Portal, useTheme } from 'react-native-paper';

export default function DetallClient() {

    const theme = useTheme();
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    const { id } = useLocalSearchParams();
    const [client, setClient] = useState<any | null>(null);

    // const client = clients.find(c => c.id === Number(id));

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
        const ok = await deleteClient(client.id);
        if (ok) {
            hideDialog();
            router.back();
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
                }}

            />
            <View style={{ padding: 25, backgroundColor: theme.colors.background, height: '100%' }}>
                <Txt variant='headlineSmall' style={{ marginTop: 20 }}>{client.fullName}</Txt>

                <Divider style={{ marginVertical: 10 }} />

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


                <Portal>
                    <Dialog style={{ backgroundColor: theme.colors.onPrimary }} visible={visible} onDismiss={hideDialog} >
                        <Dialog.Title style={{ color: theme.colors.primary }}>Confirmació</Dialog.Title>
                        <Dialog.Content>
                            <Text>Segur que vols eliminar aquest client?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog} textColor={theme.colors.primary}>Cancel·lar</Button>
                            <Button onPress={handleDelete} textColor="#d90429">
                                Eliminar
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <FAB
                icon="pencil"
                style={{ position: "absolute", bottom: 100, right: 20 }}
                onPress={handleEdit}
            />

            <FAB
                icon="delete"
                style={{ position: "absolute", bottom: 20, right: 20 }}
                onPress={showDialog}
            />
        </>
    );
}