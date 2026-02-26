import { GeneralStyles } from "@/styles/General.styles";
import { loginStyles } from "@/styles/LoginPage.styles";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Divider, useTheme } from "react-native-paper";
import Btn from "../common/Btn";
import Txt from "../common/Txt";
import TxtInput from "../common/TxtInput";
import { useAuth } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/schemas/auth.schema";
import { useState } from "react";

export default function LoginForm() {
    const theme = useTheme();
    const { logIn } = useAuth();

    const { control, handleSubmit, formState: { errors }, } = useForm<LoginFormValues>({
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
        } catch (err: any) {
            setAuthError(err.message || "Error inesperat");
        }
    };
    return (
        <View style={{ width: '100%' }}>
            <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange, onBlur } }) => (
                    <TxtInput
                        label="Email"
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

            <Divider style={GeneralStyles.divider} />

            <Btn mode="outlined" icon="google" >
                Iniciar sessió amb Google
            </Btn>

            <Txt style={loginStyles.registerTxt}>
                No tens compte?
                <Txt variant="titleSmall" style={loginStyles.registerLink}> Registra't</Txt>
            </Txt>
        </View>
    )
}