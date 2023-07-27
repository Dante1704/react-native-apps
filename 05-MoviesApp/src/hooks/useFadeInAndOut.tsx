import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFadeInAndOut = () => {


    //cuando se crea el fadescreen creo la opacidad inicializada en cero
    //y como es una instancia de Animated, tengo que extraer su valor numerico con el .current
    const opacityValue = useRef(new Animated.Value(0)).current;

    //declaro la animacion y llamo el metodo start() para que cunado llamo a fadeIn inicie
    const fadeIn = () => {
        Animated.timing(
            opacityValue,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    };

    const fadeOut = () => {
        Animated.timing(
            opacityValue,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    };

    return (
        { opacityValue, fadeIn, fadeOut }
    );
};

