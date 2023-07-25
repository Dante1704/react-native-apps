import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
//recibo la pelicula y renderizo el poster

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const MoviePoster = ({ movie, height = 420, width = 290 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<any>();


    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                marginHorizontal: 2,
                paddingBottom: 20,
            }}
        >

            <View style={{
                ...styles.imageContainer,
                width,
                height,
                marginHorizontal: 5,
            }}>
                <Image
                    source={{ uri }}
                    style={{
                        ...styles.image,
                        width: width - 5,
                        height: height - 5,
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    image: {
        borderRadius: 18,
    },
    imageContainer: {
        borderRadius: 18,
        shadowColor: '#929292',
        shadowOffset: {
            width: 0,
            height: 2,
        },//iOS only
        shadowOpacity: 0.24,//iOS only
        shadowRadius: 7,//iOS only

        elevation: 3,
    },
});
