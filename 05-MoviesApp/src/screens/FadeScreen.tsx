import React from 'react';
import { Animated, View, TouchableOpacity, Text } from 'react-native';
import { useRef } from 'react';

export const FadeScreen = () => {

    //cuando se crea el fadescreen creo la opacidad inicializada en cero
    //y como es una instancia de Animated, tengo que extraer su valor numerico con el .current
    const opacity = useRef(new Animated.Value(0)).current;

    //declaro la animacion y llamo el metodo start() para que cunado llamo a fadeIn inicie
    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    };

    console.log(opacity);


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/*  <View style={{
                backgroundColor: '#084f6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacity,
            }} />
            En lugar del View utilizo el animated view
            para que opacity pueda recibir la referencia en vez del valor numerico tipico
             */}
            <Animated.View style={{
                backgroundColor: '#084f6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacity,
            }} />
            {/* cuando presiono, que aparezca el box */}
            <TouchableOpacity onPress={fadeIn}>
                <Text style={{ fontSize: 30 }}>
                    Fade In
                </Text>
            </TouchableOpacity>
        </View>
    );
};
