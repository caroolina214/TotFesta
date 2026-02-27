import Btn from '@/components/common/Btn';
import Txt from '@/components/common/Txt';
import { useAuth } from '@/hooks/useAuth';
import { useUserStore } from '@/stores/user.store';
import { GeneralStyles } from '@/styles/General.styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Divider, IconButton, useTheme } from 'react-native-paper';

export default function UserPage() {
    const theme = useTheme();
    const router = useRouter();

    const user = useUserStore.use.user();
    const role = useUserStore.use.role();
    const { logOut } = useAuth();

    return (
        <View style={[GeneralStyles.body, { backgroundColor: theme.colors.background }]}>
            <Txt variant="headlineMedium" style={{ marginTop: 40 }}>Perfil</Txt>
            <Divider style={GeneralStyles.divider} />
            <View style={[GeneralStyles.body, { justifyContent: 'flex-start' }]}>
                <View style={{ gap: 15 }}>
                    <View style={{ gap: 5 }}>
                        <Txt variant="labelLarge">Nom complet: </Txt>
                        <Txt variant="bodyLarge">{user?.full_name}</Txt>
                    </View>

                    <View style={{ gap: 5 }}>
                        <Txt variant="labelLarge">Email: </Txt>
                        <Txt variant="bodyLarge">{user?.email}</Txt>
                    </View>

                    <View style={{ gap: 5 }}>
                        <Txt variant="labelLarge">Rol: </Txt>
                        <Txt variant="bodyLarge">{role?.name}</Txt>
                    </View>
                </View>
                <Btn mode="contained" onPress={logOut} style={{ marginTop: 25 }}>Tancar sessió</Btn>
                <Btn mode="outlined" icon='keyboard-backspace' onPress={() => { router.back() }} style={{ marginTop: 25 }}>Tornar a l'inici</Btn>
            </View>
            <IconButton
                icon="cogs"
                onPress={() => router.push("/(protected)/PreferencesPage")}
                size={32}
                style={GeneralStyles.btnIconTopRight}
                iconColor={theme.colors.onPrimaryContainer}
            />
        </View >
    );
}
