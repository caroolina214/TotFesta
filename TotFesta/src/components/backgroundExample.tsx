import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from '../app/styles';

type BackgroundShapesProps = {
    children?: React.ReactNode;
};

const { width, height } = Dimensions.get('window');

export default function BackgroundShapes({ children }: BackgroundShapesProps) {
    return (
        <View style={estils.container}>
            <View style={StyleSheet.absoluteFillObject}>
                <Svg
                    viewBox="0 0 ${width} ${height}"
                    style={[styles.blob, { left: 200 }]}>
                    <Path
                        fill="#C004D9"
                        opacity={0.3}
                        // d="M37.8,-39.5C51.7,-23.8,67.7,-11.9,70.1,2.4C72.5,16.7,61.3,33.4,47.4,45.6C33.4,57.8,16.7,65.5,5.3,60.1C-6,54.8,-12,36.4,-24.8,24.2C-37.6,12,-57.1,6,-64.4,-7.3C-71.7,-20.6,-66.8,-41.2,-54,-56.9C-41.2,-72.5,-20.6,-83.2,-4.3,-78.9C11.9,-74.5,23.8,-55.1,37.8,-39.5Z"
                        d="M33.4,-48.6C42.9,-39,50.1,-28.8,51.5,-18.2C52.9,-7.6,48.6,3.4,45.3,15.1C41.9,26.7,39.6,39,32.3,51.2C24.9,63.3,12.4,75.2,0.3,74.7C-11.8,74.3,-23.6,61.5,-38.1,51.7C-52.7,41.9,-70,35.1,-75.5,23.3C-81.1,11.5,-74.9,-5.4,-70,-23.5C-65.2,-41.6,-61.8,-60.9,-50.3,-69.9C-38.9,-78.8,-19.4,-77.3,-3.8,-72.1C11.9,-67,23.9,-58.1,33.4,-48.6Z"
                        transform="translate(100 100) scale(3)"
                    />
                </Svg>

                <Svg
                    viewBox="0 0 ${width} ${height}"
                    style={[styles.blob, { bottom: -10, right: 250 }]}>
                    <Path
                        fill="#0A36C7"
                        opacity={0.3}
                        d="M37.8,-39.5C51.7,-23.8,67.7,-11.9,70.1,2.4C72.5,16.7,61.3,33.4,47.4,45.6C33.4,57.8,16.7,65.5,5.3,60.1C-6,54.8,-12,36.4,-24.8,24.2C-37.6,12,-57.1,6,-64.4,-7.3C-71.7,-20.6,-66.8,-41.2,-54,-56.9C-41.2,-72.5,-20.6,-83.2,-4.3,-78.9C11.9,-74.5,23.8,-55.1,37.8,-39.5Z"
                        transform="translate(100 100) scale(5)"
                    />
                </Svg>

                <Svg
                    viewBox="0 0 ${width} ${height}"
                    style={[styles.blob, { bottom: 40, left: 300 }]}>
                    <Path
                        opacity={0.3}
                        fill="#BF1542"
                        d="M33.6,-54.1C47.4,-50.1,65.2,-49,67.6,-40.5C70,-32,56.9,-16,49.2,-4.5C41.4,7,38.9,14,38.2,25.5C37.5,36.9,38.6,52.9,32.5,63.1C26.5,73.3,13.2,77.8,1.5,75.3C-10.3,72.7,-20.6,63.2,-31.2,55.6C-41.8,48,-52.7,42.3,-59.2,33.4C-65.7,24.4,-67.8,12.2,-63.4,2.6C-58.9,-7.1,-47.9,-14.2,-44,-27.6C-40.1,-41.1,-43.4,-60.9,-37.2,-69.3C-31.1,-77.8,-15.5,-74.8,-2.8,-69.9C9.9,-64.9,19.7,-58.1,33.6,-54.1Z"
                        transform="translate(100 100) scale(3)"
                    />
                </Svg>
            </View>

            {/* 🔹 Contingut damunt */}
            <View style={estils.content}>{children}</View>
        </View>
    );
}

const estils = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
});