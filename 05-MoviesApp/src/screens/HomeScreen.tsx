import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';


export const HomeScreen = (/* { navigation }: Props */) => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        movieDB.get<MovieDBNowPlaying>('/now_playing')
            .then(res => {
                console.log(res.data.results[0].title);

            });
    }, []);
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Ir al Detalle"
                onPress={() => navigation.navigate('DetailScreen')}
            />
        </View>
    );
};
