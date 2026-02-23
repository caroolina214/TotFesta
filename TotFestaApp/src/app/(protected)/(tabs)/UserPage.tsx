import React from 'react';
import { View } from 'react-native';
import { GeneralStyles } from '../../../styles/General.styles';
import Txt from '../../../components/Txt';
import { Divider } from 'react-native-paper';
import Btn from '@/components/Btn';
import { useAuth } from '@/providers/AuthProvider';

export default function UserPage() {
    const { user, role, logOut } = useAuth();

    return (
        <View style={GeneralStyles.body}>
            <Txt variant="titleLarge">UserPage</Txt>
            <Divider style={{ marginVertical: 25 }} />
            <Txt variant="bodyLarge">
                User Name: {user?.name}
            </Txt>
            <Txt variant="bodyLarge">
                Rol: {role?.name}
            </Txt>
            <Divider style={{ marginVertical: 25 }} />
            <Btn mode="contained-tonal" onPress={logOut}>Tancar sessió</Btn>
        </View>
    );
}
