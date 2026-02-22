import React from 'react';
import { ScrollView, View } from 'react-native';
import {
    Divider,
    useTheme,
    IconButton
} from 'react-native-paper';
import Btn from '../components/Btn';
import TxtInput from '../components/TxtInput';
import Txt from '../components/Txt';
import DiscoBall from '../components/DiscoBall';
import { loginStyles } from '../styles/LoginPage.styles';

type LoginPageProps = {
    toggleTheme: () => void;
};

export default function LoginPage({ toggleTheme }: LoginPageProps) {

    const theme = useTheme();

    return (

        <ScrollView contentContainerStyle={loginStyles.container} style={{ backgroundColor: theme.colors.background }}>
            <IconButton icon="theme-light-dark" style={loginStyles.btnIcon} iconColor={theme.colors.onPrimaryContainer} size={32} onPress={toggleTheme} />

            <View style={loginStyles.discoball}>

                <DiscoBall size={140} />
            </View>

            <Txt variant="displaySmall" style={loginStyles.welcomeTxt}>
                Benvinguda!
            </Txt>

            <Txt variant="titleMedium" style={loginStyles.welcomeTxt}>
                Introdueix l'usuari i la contrassenya per a iniciar sessió
            </Txt>

            <TxtInput
                label="Username"
                mode="outlined"
                autoComplete="email"
                style={loginStyles.input}
            />

            <TxtInput
                label="Password"
                mode="outlined"
                secureTextEntry
                style={loginStyles.input}
            />

            <Txt
                variant="labelSmall"
                style={loginStyles.forgtPwd}
            >
                Has oblidat la contrassenya?
            </Txt>

            <Btn mode="contained" onPress={() => { }}>
                Iniciar sessió
            </Btn>

            <Divider style={loginStyles.divider} />

            <Btn
                mode="outlined"
                icon="google"
                onPress={() => { }}
            >
                Iniciar sessió amb Google
            </Btn>

            <Txt style={loginStyles.registerTxt}>
                No tens compte?
                <Txt variant="titleSmall" style={loginStyles.registerLink}> Registra't</Txt>
            </Txt>
        </ScrollView>
    );
}
