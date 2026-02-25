import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export const ClientStyles = StyleSheet.create({

    clientCard: {
        width: Dimensions.get('window').width * 0.85,
        borderWidth: 1,
        borderRadius: 12,
        padding: 15,
        marginVertical: 8,
    },

    clientCardTitle: {
        paddingBottom: 5,
        fontWeight: 'bold'
    },

});