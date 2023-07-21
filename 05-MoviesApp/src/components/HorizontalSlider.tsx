import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    title: string
    movies: Movie[],
}
export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: 250 }}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginLeft: 10,
                color: 'black',
            }}
            >
                {title}
            </Text>

            {/* Flatlist para listar elementos */}
            <FlatList
                data={movies}
                renderItem={({ item }) => {
                    return (
                        <MoviePoster
                            movie={item}
                            width={140}
                            height={200}
                        />
                    );
                }}
                keyExtractor={(item) => item.id.toString()} //prop para pasarle un id como key, pide que sea un string
                horizontal={true} //para que sea horizontal, sino por def es vertical
                showsHorizontalScrollIndicator={false} //ocultar el indicador del scroll
            />
        </View>
    );
};

