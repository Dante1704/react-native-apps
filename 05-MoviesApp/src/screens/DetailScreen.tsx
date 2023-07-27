import React from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Loading } from '../components/Loading';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }


export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { height } = useWindowDimensions();

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);


    return (
        <ScrollView>
            <TouchableOpacity style={styles.goBackButton} onPress={navigation.goBack}>
                <Icon name="arrow-back-circle" size={60} color={'white'} />
            </TouchableOpacity>
            <View style={{
                ...styles.posterImageContainer,
                height: height * 0.7,
            }}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            <View style={styles.marginContainer}>
                {
                    isLoading ?
                        <Loading /> :
                        <MovieDetails movieFull={movieFull!} cast={cast} />
                }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    posterImageContainer: {
        width: '100%',
        paddingBottom: 10,
        borderRadius: 30,
        shadowColor: '#929292',
        shadowOffset: {
            width: 0,
            height: 2,
        },//iOS only
        shadowOpacity: 0.24,//iOS only
        shadowRadius: 7,//iOS only

        elevation: 3,
    },
    marginContainer: {
        marginHorizontal: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    goBackButton: {
        position: 'absolute',
        borderRadius: 100,
        zIndex: 10,
        left: 20,
        top: 20,
    },
});
