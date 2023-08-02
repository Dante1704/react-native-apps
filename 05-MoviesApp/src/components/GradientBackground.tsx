/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFadeInAndOut } from '../hooks/useFadeInAndOut';

interface Props {
    children: JSX.Element | JSX.Element[]
}

//HOC que envuelve pasando un estilo gradiente
export const GradientBackground = ({ children }: Props) => {
    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

    const { opacityValue, fadeIn, fadeOut } = useFadeInAndOut();

    //
    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(0);
        });
    }, [colors]);

    return (
        < View style={{ flex: 1 }}>
            {/*
                este es un gradiente fijo, sobre este se simula la aparicion y desaparicion de los coloeres
                pero en realidad es un efecto causado por el Animated.View
             */}
            <LinearGradient
                colors={[prevColors.primaryColor, prevColors.secondaryColor, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />
            {/*
                Animated.View es el gradiente que realmente se anima aunque parece que es el que lo envuelve.
                Cuando se apaga este, en realidad parece que se aparece el que lo envuelve. Y cuando se prende, parece que se apaga el que lo envuelve
             */}
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity: opacityValue }}>
                <LinearGradient
                    colors={[colors.primaryColor, colors.secondaryColor, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />
            </Animated.View>
            {children}
        </ View >
    );
};
