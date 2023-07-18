import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useMovies } from '../hooks/useMovies';
import { Loading } from '../components/Loading';


export const HomeScreen = (/* { navigation }: Props */) => {
    const navigation = useNavigation<any>();
    const { peliculasEnCartelera, isLoading } = useMovies();

    return (
        <>
            {
                isLoading ?
                    <Loading /> :
                    < View >
                        <Text>Home Screen</Text>
                        <Button
                            title="Ir al Detalle"
                            onPress={() => navigation.navigate('DetailScreen')}
                        />
                    </ View>
            }
        </>
    );
};
