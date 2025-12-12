import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    titol: {
        textAlign: 'center',
        marginBottom: 25,
        fontSize: 35,
        color: '#44044E'
    },

    subtitol: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 50,
        color: '#0A36C7',
    },

    txtInput: {
        marginBottom: 12,
    },

    btn: {
        margin: 20,
        backgroundColor: '#10007A'
    },

    btnInv: {
        margin: 20,
        backgroundColor: '#0A36C7',
    },

    forgotPwd: {
        marginBottom: 5,
        color: '#44044E',
        textAlign: 'right',
    },

    registerLink: {
        marginTop: 12,
        color: '#44044E',
        textAlign: 'center',
    },

    vistaDivider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },

    liniaDivider: {
        flex: 1,
        margin: 10,
        backgroundColor: '#10007A'
    },

    txtDivider: {
        color: '#10007A',
    },

    blob: {
        width: 300,
        height: 300,
        overflow: 'visible',
        position: 'absolute',
    },
});