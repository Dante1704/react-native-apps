import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export const HomeScreen = (/* { navigation }: Props */) => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Ir al Detalle"
                onPress={() => navigation.navigate('DetailScreen')}
            />
        </View>
    );
};
