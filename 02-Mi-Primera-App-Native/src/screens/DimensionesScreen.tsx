import React from 'react';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';

//obtener las dimensiones reales fijas de la ventana del dispositivo
//const { width, height } = Dimensions.get('window');


const DimensionesScreen = () => {
    //obtener las dimensiones dinamicas en tiempo real de la ventana del dispositivo
    //esto me sirve para realizar calculos de tamaños
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.20, //asi saco el 20%
                }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.textDimensions}>W: {width}, H: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        /*  width: '50%', */
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23b',
    },
    textDimensions: {
        fontSize: 30,
        textAlign: 'center',
    },
});
export default DimensionesScreen;
