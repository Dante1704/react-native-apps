import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useMovies from '../hooks/useMovies';


export const HomeScreen = (/* { navigation }: Props */) => {
    const navigation = useNavigation<any>();
    const { peliculasEnCartelera, isLoading } = useMovies();


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color={'red'} size={100} />
            </View>
        );
    }

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
