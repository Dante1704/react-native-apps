import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { FullPokemon } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/Theme';
import { FadeInImage } from './FadeInImage';


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
                {/* Types y Peso*/}
                <Text style={{ ...stylesPokemonDetails.title, ...styles.textDark }}>Types</Text>
                <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10 }}>
                    {
                        pokemon.types.map(({ type }) => {
                            return (
                                <Text
                                    key={type.name}
                                    style={{ ...styles.textDark, ...stylesPokemonDetails.regularText }}
                                >
                                    {type.name}
                                </Text>
                            );
                        })
                    }
                </View>

                <Text style={{ ...stylesPokemonDetails.title, ...styles.textDark }}>Weight</Text>
                <Text
                    style={{ ...styles.textDark, ...stylesPokemonDetails.regularText, marginBottom: 10 }}
                >
                    {pokemon.weight} kg
                </Text>

                {/* Sprites */}
                <Text style={{ ...stylesPokemonDetails.title, ...styles.textDark }}>Sprites</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {pokemon.sprites.front_default &&
                        <FadeInImage
                            style={{ ...stylesPokemonDetails.basicSprite }}
                            uri={pokemon.sprites.front_default}
                        />}
                    {pokemon.sprites.back_default &&
                        <FadeInImage
                            style={{ ...stylesPokemonDetails.basicSprite }}
                            uri={pokemon.sprites.back_default}
                        />}
                    {pokemon.sprites.front_shiny &&
                        <FadeInImage
                            style={{ ...stylesPokemonDetails.basicSprite }}
                            uri={pokemon.sprites.front_shiny}
                        />}
                    {pokemon.sprites.back_shiny &&
                        <FadeInImage
                            style={{ ...stylesPokemonDetails.basicSprite }}
                            uri={pokemon.sprites.back_shiny}
                        />}
                </ScrollView>

                {/* Skills */}
                <Text style={{ ...stylesPokemonDetails.title, ...styles.textDark }}>Base Abilities</Text>
                <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10 }}>
                    {
                        pokemon.abilities.map(({ ability }) => {
                            return (
                                <Text
                                    key={ability.name + Math.random()}
                                    style={{ ...styles.textDark, ...stylesPokemonDetails.regularText }}
                                >
                                    {ability.name}
                                </Text>
                            );
                        })
                    }
                </View>

                {/* Movements */}
                <Text style={{ ...stylesPokemonDetails.title, ...styles.textDark }}>Movements</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, ...stylesPokemonDetails.marginBottom10 }}>
                    {
                        pokemon.moves.map(({ move }) => {
                            return (
                                <Text
                                    key={move.name}
                                    style={{ ...styles.textDark, ...stylesPokemonDetails.regularText }}
                                >
                                    {move.name}
                                </Text>
                            );
                        })
                    }
                </View>

                {/* Stats */}
                <Text style={{ ...stylesPokemonDetails.title, ...styles.textDark }}>Stats</Text>
                <View style={{
                    flex: 1,
                    paddingBottom: 55,
                }} >
                    {
                        pokemon.stats.map((stat) => {
                            return (
                                <View key={stat.stat.name} style={{ flexDirection: 'row', gap: 10 }} >
                                    <Text

                                        style={{ width: 150, ...styles.textDark, ...stylesPokemonDetails.regularText }}
                                    >
                                        {stat.stat.name}
                                    </Text>
                                    <Text
                                        style={{ ...styles.textDark, ...stylesPokemonDetails.regularText, fontWeight: 'bold' }}
                                    >
                                        {stat.base_stat}
                                    </Text>
                                </View>
                            );
                        })
                    }
                </View>

            </View>
        </ScrollView>
    );
};

const stylesPokemonDetails = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 370, //sin este margin top las palabras quedarían tapadas porque este view esta por detras en realidad
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    regularText: {
        fontSize: 17,
    },
    marginBottom10: {
        marginBottom: 10,
    },
    basicSprite: {
        width: 100,
        height: 100,
    },
});
