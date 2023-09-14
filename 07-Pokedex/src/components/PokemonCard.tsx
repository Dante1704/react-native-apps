import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
            }}>
                <View>
                    <Text style={{ ...styles.name }}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
});

{/* <FadeInImage
    uri={item.picture}
    style={{
        width: 100,
        height: 100,
    }}
/> */}
