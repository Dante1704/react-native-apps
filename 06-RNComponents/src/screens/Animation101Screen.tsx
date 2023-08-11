import React, { useRef } from 'react';
import { Easing } from 'react-native';
import { Animated, Button, StyleSheet, View } from 'react-native';

export const Animation101Screen = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const top = useRef(new Animated.Value(-100)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(
            top,
            {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
                easing: Easing.bounce, //con esta propiedad elijo la manera en la que la caja cae, y diciendo bounce hago que rebote.
            }
        ).start();
    };

    const fadeOut = () => {
        Animated.timing(
            opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity: opacity,
                marginBottom: 20,
                // top: top, no es top es transform
                transform: [{
                    translateY: top,
                }],
            }} />
            <Button
                title="fadeIn"
                onPress={fadeIn}
            />
            <Button
                title="fadeOut"
                onPress={fadeOut}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        width: 150,
        height: 150,
    },
});
