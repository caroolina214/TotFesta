import React from 'react';
import { ScrollView, View } from 'react-native';
import { Divider, useTheme, IconButton } from 'react-native-paper';
import Btn from '@/components/Btn';
import TxtInput from '@/components/TxtInput';
import Txt from '@/components/Txt';
import DiscoBall from '@/components/DiscoBall';
import { loginStyles } from '@/styles/LoginPage.styles';
import { useThemeContext } from '@/providers/ThemeProvider';
import { useRouter } from "expo-router";


import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "@/schemas/auth.schema";
import { useAuth } from "@/providers/AuthProvider";
import { useState } from "react";

export default function LoginPage() {
    const { isDark, setIsDark } = useThemeContext();
    const theme = useTheme();
    const router = useRouter();

    const { logIn } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [authError, setAuthError] = useState<string | null>(null);

    const onSubmit = async (data: LoginFormValues) => {
        setAuthError(null);

        try {
            await logIn(data.email, data.password);
            // El provider farà la redirecció automàtica
        } catch (err: any) {
            setAuthError(err.message || "Error inesperat");
        }
    };


    return (
        <ScrollView contentContainerStyle={loginStyles.container} style={{ backgroundColor: theme.colors.background }}>
            <IconButton
                icon="theme-light-dark"
                onPress={() => setIsDark(!isDark)}
                size={32}
                style={loginStyles.btnIcon}
                iconColor={theme.colors.onPrimaryContainer}
            />

            <View style={loginStyles.discoball}>
                <DiscoBall size={140} />
            </View>

            <Txt variant="displaySmall" style={loginStyles.welcomeTxt}>
                Benvinguda!
            </Txt>

            <Txt variant="titleMedium" style={loginStyles.descTxt}>
                Introdueix l'usuari i la contrasenya per a iniciar sessió
            </Txt>

            <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange, onBlur } }) => (
                    <TxtInput
                        label="Username"
                        mode="outlined"
                        autoComplete="email"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        style={loginStyles.input}
                        error={!!errors.email}
                        errorText={errors.email?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange, onBlur } }) => (
                    <TxtInput
                        label="Password"
                        mode="outlined"
                        secureTextEntry
                        style={loginStyles.input}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        error={!!errors.password}
                        errorText={errors.password?.message}
                    />
                )}
            />

            <Txt variant="labelSmall" style={loginStyles.forgtPwd}>
                Has oblidat la contrasenya?
            </Txt>

            <Btn mode="contained" onPress={handleSubmit(onSubmit)}>
                Iniciar sessió
            </Btn>
            {authError && (
                <Txt variant="labelSmall" style={{ color: theme.colors.error }}>
                    {authError}
                </Txt>
            )}

            <Divider style={loginStyles.divider} />

            <Btn mode="outlined" icon="google" >
                Iniciar sessió amb Google
            </Btn>

            <Txt style={loginStyles.registerTxt}>
                No tens compte?
                <Txt variant="titleSmall" style={loginStyles.registerLink}> Registra't</Txt>
            </Txt>
        </ScrollView>
    );
}
