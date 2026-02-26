import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Checkbox, useTheme } from 'react-native-paper';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { createClient, updateClient } from '@/services/client.service';
import TxtInput from '@/components/common/TxtInput';
import { clients } from '@/types/mocks/client.mock';
import Btn from '@/components/common/Btn';

type Item = {
    key: string
    url: string
}

export default function ClientDataPage() {
    const theme = useTheme();
    const isDark = theme.dark;
    const router = useRouter();
    const { mode, id } = useLocalSearchParams();

    const isEdit = mode === "edit";
    const clientToEdit = isEdit ? clients.find(c => c.id === Number(id)) : null;

    // Estat del formulari
    const [fullName, setNombre] = useState("");
    const [nifCif, setNifCif] = useState("");
    const [phone, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotas] = useState("");
    const [active, setActivo] = useState(true);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

    const nouId = clients.length > 0
        ? Math.max(...clients.map(c => c.id)) + 1
        : 1;

    // Quan estem editant, carregar dades del client
    useEffect(() => {
        if (isEdit && clientToEdit) {
            setNombre(clientToEdit.fullName);
            setNifCif(clientToEdit.nifCif ?? "");
            setTelefono(clientToEdit.phone ?? "");
            setEmail(clientToEdit.email ?? "");
            setNotas(clientToEdit.notes ?? "");
            setActivo(clientToEdit.active);
        }
    }, [isEdit]);


    //per a guardar el client
    const handleGuardar = async () => {
        try {

            if (isEdit && clientToEdit) {
                // Actualitzar client existent
                await updateClient({
                    id: clientToEdit.id,
                    fullName,
                    nifCif: nifCif || undefined,
                    phone: phone || undefined,
                    email: email || undefined,
                    notes: notes || undefined,
                    active,
                });
            } else {
                // Crear client nou
                await createClient({
                    id: nouId,
                    fullName,
                    nifCif: nifCif || undefined,
                    phone: phone || undefined,
                    email: email || undefined,
                    notes: notes || undefined,
                    active,
                });
            }

            router.back();
        } catch (err: any) {
            switch (err.code) {
                case "MISSING_CONTACT":
                    setFieldErrors({
                        email: err.message,
                        phone: err.message
                    });
                    break;

                case "INVALID_EMAIL":
                    setFieldErrors({ email: err.message });
                    break;

                case "INVALID_PHONE":
                    setFieldErrors({ phone: err.message });
                    break;

                case "INVALID_NIFCIF":
                case "DUPLICATE_NIFCIF":
                    setFieldErrors({ nifCif: err.message });
                    break;

                default:
                    setFieldErrors({ general: err.message || "Error inesperat" });
            }
        }
    };

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: isEdit ? "Editar client" : "Nou client",
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

            <ScrollView
                contentContainerStyle={{
                    padding: 20,
                    backgroundColor: theme.colors.background,
                    height: '100%',
                    flexGrow: 1,
                }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View>
                        <TxtInput
                            label="Nom complet (*)"
                            value={fullName}
                            onChangeText={setNombre}
                            mode="outlined"
                        />

                        <TxtInput
                            label="NIF/CIF"
                            value={nifCif}
                            onChangeText={setNifCif}
                            mode="outlined"
                            error={!!fieldErrors.nifCif}
                            errorText={fieldErrors.nifCif}
                        />

                        <TxtInput
                            label="Telèfon"
                            value={phone}
                            onChangeText={setTelefono}
                            keyboardType="phone-pad"
                            mode="outlined"
                            error={!!fieldErrors.phone}
                            errorText={fieldErrors.phone}
                        />

                        <TxtInput
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            mode="outlined"

                            error={!!fieldErrors.email}
                            errorText={fieldErrors.email}
                        />

                        <TxtInput
                            label="Notes"
                            value={notes}
                            onChangeText={setNotas}
                            mode="outlined"
                            multiline
                            numberOfLines={3}
                        />

                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                            <Checkbox
                                status={active ? "checked" : "unchecked"}
                                onPress={() => setActivo(!active)}
                                color={
                                    isDark ?
                                        theme.colors.tertiary
                                        : theme.colors.onSecondaryContainer
                                }
                            />
                            <Text id='isActive' style={{ fontSize: 20 }}>{active ? "Actiu" : "Inactiu"}
                            </Text>
                        </View>
                    </View>
                    <Btn
                        mode="contained"
                        onPress={handleGuardar}
                        disabled={!fullName.trim()}
                        style={{ marginBottom: 15 }}
                    >
                        {isEdit ? "Guardar canvis" : "Crear client"}
                    </Btn>
                </View>
            </ScrollView>
        </>

    );
}
