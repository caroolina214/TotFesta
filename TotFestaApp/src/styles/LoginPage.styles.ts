import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    container: {
        padding: 28,
        gap: 10,
        minHeight: '100%',
        justifyContent: 'center',
    },
    welcomeTxt: {
        textAlign: 'center',
        marginTop: 20,
    },
    input: {
        marginTop: 15,
    },
    forgtPwd: {
        textAlign: 'right',
        marginBottom: 25,
    },
    divider: {
        marginVertical: 15,
    },
    registerTxt: {
        marginTop: 15,
        textAlign: 'center',
    },
    registerLink: {
        fontWeight: 'bold',
    },

    btnIcon: {
        position: 'absolute',
        top: 60,
        right: 5,
    },

    discoball: {
        // Android
        position: 'absolute',
        top: 15,
        left: '37%',

        //Web
        // position: 'relative',
        // top: 0,
    }
});