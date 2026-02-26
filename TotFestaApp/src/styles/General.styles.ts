import { Dimensions, StyleSheet } from 'react-native';

export const GeneralStyles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    btnIconTheme: {
        position: 'absolute',
        top: 60,
        right: 5,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    divider: {
        marginVertical: 15,
        height: 1.5,
    },

    paddingTextAfterIcon: {
        paddingLeft: 8
    },

    card: {
        width: Dimensions.get('window').width * 0.85,
        borderWidth: 1,
        borderRadius: 12,
        padding: 15,
        marginVertical: 8,
    },

    cardTitle: {
        paddingBottom: 8,
        // fontWeight: 700,
    },
});