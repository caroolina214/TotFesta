import Txt from '@/components/common/Txt';
import { GeneralStyles } from '@/styles/General.styles';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, useTheme } from 'react-native-paper';

interface WelcomeCardProps { userName: string; }

export default function WelcomeCard({ userName }: WelcomeCardProps) {
    const theme = useTheme();
    const isDark = theme.dark;

    return (
        <TouchableOpacity onPress={() => router.push(`(protected)/UserPage`)} >
            <View style={[
                GeneralStyles.card,
                {
                    borderColor: isDark ? (theme.colors as any).quaternaryContainer : (theme.colors as any).quaternary,
                    backgroundColor: isDark ? (theme.colors as any).quaternary : (theme.colors as any).quaternaryContainer,
                    marginVertical: 15,
                }
            ]}>
                <View style={[GeneralStyles.row, { justifyContent: 'space-between' }]}>
                    <View style={GeneralStyles.row}>
                        <Icon size={40} source='account-circle' />
                        <Txt variant='bodyLarge'
                            style={[
                                GeneralStyles.paddingTextAfterIcon,
                                { fontSize: 20 }
                            ]}>Hola, </Txt>
                        <Txt variant='displaySmall'
                            style={[
                                { fontSize: 24, color: theme.colors.onSurface, }
                            ]}>{userName}
                        </Txt>
                    </View>
                    {/* <Icon size={28} source='account-arrow-right-outline' /> */}
                    <Icon size={28} source='account-details' color={isDark ? (theme.colors as any).quaternaryContainer : (theme.colors as any).quaternary} />
                </View>
            </View>
        </TouchableOpacity >
    );

}

