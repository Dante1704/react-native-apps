import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { FullPokemon } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/Theme';


interface Props {
    pokemon: FullPokemon
}
export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}>
            <View style={{
                ...stylesPokemonDetails.container,
            }}>
                {/* Types */}
                <Text style={{ ...stylesPokemonDetails.title, ...styles.textDark }}>Types</Text>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {
                        pokemon.types.map(({ type }) => {
                            return (
                                <Text
                                    key={type.name}
                                    style={{ ...styles.textDark }}
                                >
                                    {type.name}
                                </Text>
                            );
                        })
                    }
                </View>
                {/* Sprites */}
                <Text style={{ ...stylesPokemonDetails.title, ...styles.textDark }}>Sprites</Text>

            </View>
        </ScrollView>
    );
};

const stylesPokemonDetails = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 370, //sin este margin top las palabras quedarian tapadas porque este view esta por detras en realidad
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    regularText: {
        fontSize: 17,
    },
});
