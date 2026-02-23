import { ClientStyles } from '@/styles/Client.styles';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, useTheme } from 'react-native-paper';
import Txt from './Txt';

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
        <TouchableOpacity onPress={() => { }} >
            <View style={[
                ClientStyles.clientCard,
                {
                    borderColor: isDark ? (theme.colors as any).quinaryContainer : (theme.colors as any).onQuinaryContainer,
                    backgroundColor: isDark ? (theme.colors as any).onQuinaryContainer : (theme.colors as any).quinaryContainer
                }
            ]}
            >
                <Txt
                    variant='headlineSmall'
                    style={[
                        ClientStyles.clientCardTitle,
                        {
                            fontSize: 22,
                            color: isDark ? (theme.colors as any).quinaryContainer : (theme.colors as any).onQuinaryContainer,
                        }]}
                >
                    {client.fullName}
                </Txt>
                <View style={ClientStyles.clientCardRow}>
                    <Icon
                        source={'phone'}
                        size={20}
                        color={isDark ? (theme.colors as any).quinaryContainer : (theme.colors as any).onQuinaryContainer}
                    />
                    <Txt variant='bodyLarge' style={ClientStyles.paddingAfterIcon}>
                        {client.phone}
                    </Txt>
                </View>
                <View style={ClientStyles.clientCardRow}>
                    <Icon
                        source={'email'}
                        size={20}
                        color={isDark ? (theme.colors as any).quinaryContainer : (theme.colors as any).onQuinaryContainer}
                    />
                    <Txt variant='bodyLarge' style={ClientStyles.paddingAfterIcon}>
                        {client.email}
                    </Txt>
                </View>
            </View>
        </TouchableOpacity >
    );

}

