import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}
export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.container}>
            <Image
                source={{ uri }}
                style={{ width: 50, height: 50, borderRadius: 10 }} />
            <View style={{ marginLeft: 10 }} >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: -20, //este solo lo pongo para anular el que viene del view del detail screen
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 10,
    },
});
