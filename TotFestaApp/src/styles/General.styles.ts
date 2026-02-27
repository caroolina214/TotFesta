import { Dimensions, StyleSheet } from 'react-native';

export const GeneralStyles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: '100%',
        gap: 5,
        paddingTop: 15
    },

    btnIconTopRight: {
        position: 'absolute',
        top: 40,
        right: 10,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    divider: {
        marginVertical: 10,
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