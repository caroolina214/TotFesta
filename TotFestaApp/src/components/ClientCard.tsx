import { ClientStyles } from '@/styles/Client.styles';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, useTheme } from 'react-native-paper';
import Txt from './Txt';
import { router } from 'expo-router';
import { GeneralStyles } from '@/styles/General.styles';

interface ClientCardProps {
    client: {
        id: number;
        fullName: string;
        phone?: string;
        email?: string;
    };
}


export default function ClientCard({ client }: ClientCardProps) {
    const theme = useTheme();
    const isDark = theme.dark;

    return (
        <TouchableOpacity onPress={() => router.push(`clients/${client.id}`)} >
            <View style={[
                ClientStyles.clientCard,
                {
                    borderColor: isDark ? theme.colors.secondaryContainer : theme.colors.onSecondaryContainer,
                    backgroundColor: isDark ? theme.colors.onSecondaryContainer : theme.colors.secondaryContainer
                }
            ]}
            >
                <Txt
                    variant='headlineSmall'
                    style={[
                        ClientStyles.clientCardTitle,
                        {
                            fontSize: 22,
                            color: theme.colors.onSurface,
                        }]}
                >
                    {client.fullName}
                </Txt>
                {client.phone && (
                    <View style={GeneralStyles.row}>
                        <Icon
                            source={'phone'}
                            size={20}
                            color={isDark ? theme.colors.secondaryContainer : theme.colors.onSecondaryContainer}
                        />

                        <Txt variant='bodyLarge' style={GeneralStyles.paddingTextAfterIcon}>
                            {client.phone}
                        </Txt>
                    </View>
                )}
                {client.email && (
                    <View style={GeneralStyles.row}>
                        <Icon
                            source={'email'}
                            size={20}
                            color={isDark ? theme.colors.secondaryContainer : theme.colors.onSecondaryContainer}
                        />
                        <Txt variant='bodyLarge' style={GeneralStyles.paddingTextAfterIcon}>
                            {client.email}
                        </Txt>
                    </View>
                )}
            </View>
        </TouchableOpacity >
    );

}

