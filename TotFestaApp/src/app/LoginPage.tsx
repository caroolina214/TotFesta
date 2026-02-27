import DiscoBall from '@/components/common/DiscoBall';
import Txt from '@/components/common/Txt';
import LoginForm from '@/components/forms/LoginForm';

import { useThemeContext } from '@/providers/ThemeProvider';
import { GeneralStyles } from '@/styles/General.styles';
import { loginStyles } from '@/styles/LoginPage.styles';

import React from 'react';
import { ScrollView, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';

export default function LoginPage() {
    const { themeMode, setThemeMode } = useThemeContext();
    const theme = useTheme();

    return (
        <ScrollView contentContainerStyle={GeneralStyles.body}
            style={{ backgroundColor: theme.colors.background }}
            keyboardShouldPersistTaps="handled"
        >
            <View style={loginStyles.discoball}>
                <DiscoBall size={140} />
            </View>

            <Txt variant="displaySmall" style={loginStyles.welcomeTxt}>
                Benvinguda!
            </Txt>

            <Txt variant="titleMedium" style={loginStyles.descTxt}>
                Introdueix l'usuari i la contrasenya per a iniciar sessió
            </Txt>

            <LoginForm />

        </ScrollView>
    );
}
