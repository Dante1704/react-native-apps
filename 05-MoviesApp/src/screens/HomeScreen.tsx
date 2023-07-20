import React from 'react';
import { View, useWindowDimensions, ScrollView } from 'react-native';
//import { useNavigation } from '@react-navigation/core';
import { useMovies } from '../hooks/useMovies';
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';



export const HomeScreen = () => {
    //const navigation = useNavigation<any>();

    const { width } = useWindowDimensions();
    const { top } = useSafeAreaInsets(); //para no renderizar sobre el notch de iOS
    const { peliculasEnCartelera, isLoading } = useMovies();

    return (
        <>
            {/* ScrollView para poder scrollear en todo el screen */}
            <ScrollView>
                <View style={{
                    marginTop: top + 20,
                    //al view le defino un tamaño levemente superior al de las imagenes para que se renderize la shadow
                    height: 420,
                }}>
                    {/* carousel principal*/}
                    {/* carousel instalado de react-native-snap-carousel */}
                    <Carousel
                        data={peliculasEnCartelera}
                        renderItem={({ item }) => {
                            return (
                                isLoading ?
                                    <Loading /> :
                                    <MoviePoster movie={item} />
                            );
                        }}
                        sliderWidth={width}
                        itemWidth={280}
                        vertical={false} //sin esto no funciona
                    />
                </ View>
                {/* peliculas populares*/}
                <HorizontalSlider title={'En cine'} movies={peliculasEnCartelera} isLoading={isLoading} />
                <HorizontalSlider title={'En cine'} movies={peliculasEnCartelera} isLoading={isLoading} />
            </ScrollView>
        </>
    );
};

