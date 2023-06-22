import React from 'react';
import { StyleSheet, View } from 'react-native';

const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde} />
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    );
};

//POR DEFECTO TODOS LOS OBJETOS TIENEN POSICION RELATIVE al padre
//POSITION ABSOLUTE TAMBIEN ES RESPECTO AL PADRE, NO A LA VENTANA COMO PASA EN WEB
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        width: '75%',
        backgroundColor: '#28C4D9',
        /*         justifyContent: 'center',
                alignItems: 'center', */
    },
    cajaMorada: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: 0,
        right: 0,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',

    },
    cajaNaranja: {
        position: 'absolute',
        width: 100,
        height: 100,
        bottom: 0,
        right: 0,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',

    },
    cajaVerde: {
        /* position: 'absolute',
        bottom: 0,
        width: 100,
        height: 100,*/
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#12d44d',
        //una manera de llenar todo el objeto padre con este elemento:
        /* right: 0,
        left: 0,
        top: 0,
        bottom: 0, */
        //o lo que es lo mismo:
        ...StyleSheet.absoluteFillObject,
    },
});

export default PositionScreen;
