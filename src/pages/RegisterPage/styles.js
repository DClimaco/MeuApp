import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#51484F',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '400px',
        height: '400px',
        marginBottom: '0px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: 'grey',
        padding: '10px',
        fontSize: '20px',
        fontFamily: 'OptimusPrinceps',
        opacity: '0.9',
        border: '1px solid gold',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    btn: {
        backgroundColor: 'black',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        fontFamily: 'OptimusPrinceps',
        color: 'gold'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    }
});

export default styles;