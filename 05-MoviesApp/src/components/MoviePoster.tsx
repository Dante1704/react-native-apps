import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
//recibo la pelicula y renderizo el poster

interface Props {
    movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (

        <View style={styles.imageContainer}>
            <Image
                source={{ uri }}
                style={styles.image}
            />
        </View>

    );
};


const styles = StyleSheet.create({
    imageContainer: {
        height: 300,
        width: 200,
        backgroundColor: '#5856d6',
        borderRadius: 18,
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
});
