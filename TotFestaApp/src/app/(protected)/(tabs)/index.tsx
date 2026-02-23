import React from 'react';
import { View } from 'react-native';
import { GeneralStyles } from '../../../styles/General.styles';
import Txt from '../../../components/Txt';

export default function HomePage() {
    return (
        <View style={GeneralStyles.body}>
            <Txt variant="titleLarge">HomePage</Txt>
        </View>
    );
}
