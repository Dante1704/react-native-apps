import React from 'react';
import { Animated, View, TouchableOpacity, Text } from 'react-native';
import { useFadeInAndOut } from '../hooks/useFadeInAndOut';

export const FadeScreen = () => {

    const { opacityValue, fadeIn, fadeOut } = useFadeInAndOut();

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#cdcdcd',
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
                opacity: opacityValue,
            }} />
            {/* cuando presiono, que aparezca el box */}
            <TouchableOpacity onPress={fadeIn}>
                <Text style={{ fontSize: 30 }}>
                    Fade In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={fadeOut}>
                <Text style={{ fontSize: 30 }}>
                    Fade Out
                </Text>
            </TouchableOpacity>
        </View>
    );
};
