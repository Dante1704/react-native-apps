import { useRef } from 'react';
import { Animated } from 'react-native';

//este custom hook se encarga de hacer las animaciones de aparicion y desvanecimiento
//del componente gradiente animado que esta por encima del gradiente fijo
export const useFadeInAndOut = () => {

    //cuando se crea el fadescreen creo la opacidad inicializada en cero
    //y como es una instancia de Animated, tengo que extraer su valor numerico con el .current
    const opacityValue = useRef(new Animated.Value(0)).current;

    //declaro la animacion y llamo el metodo start()
    // para ejecutar la animacion de timing
    const fadeIn = (callback?: () => void) => {
        Animated.timing(
            opacityValue,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }
        ).start(() => callback ? callback() : null); //le indico que cuando se ejecuta el fadeIn despues de eso se ejecute la cb fn que paso
    };

    const fadeOut = (duration: number = 300) => {
        Animated.timing(
            opacityValue,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
            }
        ).start();
    };

    return (
        { opacityValue, fadeIn, fadeOut }
    );
};


