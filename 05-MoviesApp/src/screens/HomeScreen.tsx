import React from 'react';
import { View } from 'react-native';
//import { useNavigation } from '@react-navigation/core';
import { useMovies } from '../hooks/useMovies';
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';



export const HomeScreen = () => {
    //const navigation = useNavigation<any>();
    const { top } = useSafeAreaInsets(); //para no renderizar sobre el notch de iOS
    const { peliculasEnCartelera, isLoading } = useMovies();

    return (
        <>
            {
                <View style={{
                    marginTop: top + 20,
                    height: 420,
                }}>
                    <Carousel
                        data={peliculasEnCartelera}
                        renderItem={({ item }) => {
                            return (
                                isLoading ?
                                    <Loading /> :
                                    <MoviePoster movie={item} />
                            );
                        }}
                        sliderWidth={400}
                        itemWidth={280}
                        vertical={false}
                    />
                </ View>
            }
        </>
    );
};

