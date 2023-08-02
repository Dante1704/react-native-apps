/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { View, useWindowDimensions, ScrollView } from 'react-native';
//import { useNavigation } from '@react-navigation/core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';



export const HomeScreen = () => {
    //const navigation = useNavigation<any>();
    const { setMainColors } = useContext(GradientContext);
    const { width } = useWindowDimensions();
    const { top } = useSafeAreaInsets(); //para no renderizar sobre el notch de iOS
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

    const getPosterColors = async (index: number) => {
        const currentMovie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`;
        const { primaryColor, secondaryColor } = await getImageColors(uri);
        setMainColors({ primaryColor, secondaryColor });
    };

    //la primera vez originalmente no toma el color de la primer pelicula del carousel
    //porque lo detecta vacio,
    //por eso con este useEffect logro que tome incluso el color de la primer pelicula
    //del color del resto de los posters se encarga el onSnapToItem
    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying]);


    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <GradientBackground>
            {/* ScrollView para poder scrollear en todo el screen */}
            <ScrollView>
                <View style={{
                    marginTop: top + 20,
                    //al view le defino un tamaño levemente superior al de las imagenes para que se renderize la shadow
                    height: 440,
                }}>
                    {/* carousel principal*/}
                    {/* carousel instalado de react-native-snap-carousel */}
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }) => {
                            return (
                                <MoviePoster movie={item} />
                            );
                        }}
                        sliderWidth={width}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                        vertical={false} //sin esto no funciona

                        //esta funcion se ejecuta cuando deslizo y aparece el siguiente elemento
                        //en este caso es el siguiente poster
                        onSnapToItem={index => getPosterColors(index)}
                    />
                </ View>
                {/* peliculas populares*/}
                {/* son flatList propios de React Native */}
                <HorizontalSlider title={'Populares'} movies={popular} />
                <HorizontalSlider title={'Mejor calificadas'} movies={topRated} />
                <HorizontalSlider title={'Proximas en cartelera'} movies={upcoming} />
            </ScrollView>
        </GradientBackground>
    );
};

