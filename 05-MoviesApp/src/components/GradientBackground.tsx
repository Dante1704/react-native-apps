import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[]
}

//HOC que envuelve pasando un estilo gradiente
export const GradientBackground = ({ children }: Props) => (
    <View style={{ flex: 1 }}>
        <LinearGradient
            colors={['#084f6a', '#75CEDB', 'white']}
            style={{ ...StyleSheet.absoluteFillObject }}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.5, y: 0.7 }}
        />
        {children}
    </View>
);
