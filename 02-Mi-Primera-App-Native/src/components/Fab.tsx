import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    onPress: () => void,
    position?: 'br' | 'bl' //bottom Right o Left
}

//fab = floating action button
const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const android = () => {
        return (
            //la unica manera de configurar el ripple para que quede bien es
            //llamando al componente TouchableNativeFeedback y envolverlo con un View
            <View
                // a styles puedo pasarle un array de estilos
                style={[styles.fabLocation, (position === 'bl' ? styles.fabLocationL : styles.fabLocationR)]}
            >
                <TouchableNativeFeedback
                    //onclick
                    onPress={onPress}
                    // ripple es el efecto que se causa cuando tocas un elemento,
                    // es como un burbujeo
                    background={TouchableNativeFeedback.Ripple('#3d3ad3', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    //como en ios no esta el problema del ripple, puedo seguir usandoTouchableOpacity
    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                style={[styles.fabLocation, (position === 'bl' ? styles.fabLocationL : styles.fabLocationR)]}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    //con Platform puedo elegir que renderizar de acuerdo al OS
    return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
    fab: {
        height: 60,
        width: 60,
        backgroundColor: '#5856d6',
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#838282',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabLocation: {
        position: 'absolute',
        bottom: 20,
    },
    fabLocationR: {
        right: 20,
    },
    fabLocationL: {
        left: 20,
    },
    textButtonIncrementar: {
        textAlign: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
export default Fab;
