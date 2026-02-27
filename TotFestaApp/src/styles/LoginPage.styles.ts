import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    welcomeTxt: {
        textAlign: 'center',
        marginTop: 60,
    },
    descTxt: {
        textAlign: 'center',
        marginVertical: 10,
    },
    input: {
        marginTop: 5,
    },
    forgtPwd: {
        textAlign: 'right',
        marginBottom: 25,
    },

    registerTxt: {
        marginTop: 15,
        textAlign: 'center',
    },
    registerLink: {
        fontWeight: 'bold',
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