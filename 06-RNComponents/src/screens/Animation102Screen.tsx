import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder
        .create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated
                .event([
                    null,
                    {
                        dx: pan.x, // x,y are Animated.Value
                        dy: pan.y,
                    },
                ],
                    { useNativeDriver: false } /* en la documentacion aparece en true pero asi no funciona */),
            onPanResponderRelease: () => {
                Animated
                    .spring(
                        pan, // Auto-multiplexed
                        {
                            toValue: { x: 0, y: 0 },
                            useNativeDriver: false,
                        }, // Back to zero
                    )
                    .start();
            },
        });

    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.purpleBox]}
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
        backgroundColor: '#9830a1',
        width: 150,
        height: 150,
    },
});
