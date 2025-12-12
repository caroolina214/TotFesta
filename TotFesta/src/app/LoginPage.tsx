import React, { useState } from 'react';
import { View, GestureResponderEvent } from 'react-native';
import { Text, TextInput, Button, Divider } from 'react-native-paper';
import { styles } from './styles'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login amb:', email, password);
    };

    function handleGoogleLogin(e: GestureResponderEvent): void {
        throw new Error('Function not implemented.');
    }

    return (
        <View style={styles.body}>
            <Text variant="titleLarge" style={styles.titol}>Benvingut</Text>
            <Text variant="bodyMedium" style={styles.subtitol}>
                Introdueix les dades de l'usuari per a seguir
            </Text>

            <TextInput
                label="Correu electrònic"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                mode="outlined"
                style={styles.txtInput}
            />

            <TextInput
                label="Contrasenya"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                mode="outlined"
                style={styles.txtInput}
            />
            <Text
                style={styles.forgotPwd}
                onPress={() => console.log('Has oblidat la contrasenya')}
            >
                Has oblidat la contrasenya?
            </Text>

            <Button mode="contained" onPress={handleLogin} style={styles.btn}>
                Iniciar Sessió
            </Button>


            <View style={styles.vistaDivider}>
                <Divider style={styles.liniaDivider} />
                <Text style={styles.txtDivider}>Continua amb</Text>
                <Divider style={styles.liniaDivider} />
            </View>


            <Button
                style={styles.btn}
                mode="outlined"
                icon="google"
                onPress={handleGoogleLogin}
            >
                Conter de Google
            </Button>

            <Text
                style={styles.registerLink}
                onPress={() => console.log('Registre')}
            >
                Encara no tens un compte? Registra't
            </Text>

        </View>
    );
}

