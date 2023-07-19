import React from 'react';
import { View } from 'react-native';
//import { useNavigation } from '@react-navigation/core';
import { useMovies } from '../hooks/useMovies';
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const HomeScreen = () => {
    //const navigation = useNavigation<any>();
    const { top } = useSafeAreaInsets(); //para no renderizar sobre el notch de iOS
    const { peliculasEnCartelera, isLoading } = useMovies();

    return (
        <>
            {
                isLoading ?
                    <Loading /> :
                    <View style={{ marginTop: top + 20 }}>
                        <MoviePoster movie={peliculasEnCartelera[1]} />
                    </ View>
            }
        </>
    );
};
