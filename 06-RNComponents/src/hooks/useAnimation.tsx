import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(
            opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const startMovingPosition = (initPosition: number = -100, duration: number = 300) => {

        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                easing: Easing.bounce, //con esta propiedad elijo la manera en la que la caja cae, y diciendo bounce hago que rebote.
            }
        ).start();
    };


    return { opacity, position, fadeIn, fadeOut, startMovingPosition };
};

