import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Switch, View } from 'react-native';
import { Text, TextInput, Button, Checkbox } from 'react-native-paper';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { createClient, updateClient } from '@/services/client.service';
import { GeneralStyles } from '@/styles/General.styles';
import TxtInput from '@/components/TxtInput';
import { clients } from '@/types/mocks/client.mock';

type Item = {
    key: string
    url: string
}

export default function ClientDataPage() {
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
        if (isEdit && clientToEdit) {
            // Actualitzar client existent
            updateClient({
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
    };

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: isEdit ? "Editar client" : "Nou client",
                    headerTitleAlign: "center",
                }}
            />

            <ScrollView contentContainerStyle={{ padding: 20 }}>

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
                />

                <TxtInput
                    label="Telèfon"
                    value={phone}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                    mode="outlined"
                />

                <TxtInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    mode="outlined"
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
                    />
                    <Text id='isActive' style={{ fontSize: 20 }}>{active ? "Actiu" : "Inactiu"}
                    </Text>
                </View>

                <Button
                    mode="contained"
                    onPress={handleGuardar}
                    disabled={!fullName.trim()}
                >
                    {isEdit ? "Guardar canvis" : "Crear client"}
                </Button>

            </ScrollView>
        </>

    );
}
