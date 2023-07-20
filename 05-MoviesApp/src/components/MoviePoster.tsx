import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
//recibo la pelicula y renderizo el poster

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const MoviePoster = ({ movie, height = 400, width = 250 }: Props) => {



    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (

        <View style={{
            ...styles.imageContainer,
            width,
            height,
            marginHorizontal: 5,
        }}>
            <Image
                source={{ uri }}
                style={styles.image}
            />
        </View>

    );
};


const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#5856d6',
        borderRadius: 18,
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 7,
        },//iOS only
        shadowOpacity: 0.43,//iOS only
        shadowRadius: 30,//iOS only

        elevation: 5,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
});
