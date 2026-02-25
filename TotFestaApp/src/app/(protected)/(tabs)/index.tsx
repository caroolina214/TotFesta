import React from 'react';
import { View } from 'react-native';
import { GeneralStyles } from '../../../styles/General.styles';
import Txt from '../../../components/Txt';
import { useTheme } from 'react-native-paper';

export default function HomePage() {
    const theme = useTheme();
    return (
        <View style={[GeneralStyles.body, { backgroundColor: theme.colors.background }]}>
            <Txt variant="displaySmall">HomePage</Txt>
        </View>
    );
}
