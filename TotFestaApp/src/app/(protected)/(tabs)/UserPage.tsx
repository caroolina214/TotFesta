import Btn from '@/components/Btn';
import { useAuth } from '@/providers/AuthProvider';
import { useThemeContext } from '@/providers/ThemeProvider';
import React from 'react';
import { View } from 'react-native';
import { Divider, IconButton, useTheme } from 'react-native-paper';
import Txt from '../../../components/Txt';
import { GeneralStyles } from '../../../styles/General.styles';

export default function UserPage() {
    const { user, role, logOut } = useAuth();

    const { isDark, setIsDark } = useThemeContext();
    const theme = useTheme();


    return (
        <View style={[GeneralStyles.body, { backgroundColor: theme.colors.background }]}>
            <IconButton
                icon="theme-light-dark"
                onPress={() => setIsDark(!isDark)}
                size={32}
                style={GeneralStyles.btnIconTheme}
                iconColor={theme.colors.onPrimaryContainer}
            />
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                <View>
                    <Txt variant="displaySmall">UserPage</Txt>
                    <Divider style={GeneralStyles.divider} />
                    <View style={{ marginTop: 25 }}>
                        <Txt variant="bodyLarge">
                            User Name: {user?.name}
                        </Txt>
                        <Txt variant="bodyLarge">
                            Rol: {role?.name}
                        </Txt>
                    </View>
                </View>
                <Btn mode="contained" onPress={logOut}>Tancar sessió</Btn>
            </View>
        </View>
    );
}
