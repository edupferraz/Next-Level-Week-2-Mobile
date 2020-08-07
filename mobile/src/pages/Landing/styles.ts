import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 30,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
    },

    title:{
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 20,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonPrimary: {
        backgroundColor: '#9871F5',
    },

    buttonSecondary: {
        backgroundColor: '#04D361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 18,
        marginTop: 10
    },

    totalConnections:{
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 11,
        lineHeight: 20,
        maxWidth: 260,
        marginLeft: 20,
        marginTop:40,
    },




});

export default styles;