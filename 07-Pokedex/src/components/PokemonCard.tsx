/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const navigation = useNavigation<any>();

    const [bgColor, setBgColor] = useState('grey'); //el color por def va a ser gray

    //es necesario considerar si el componente esta montado
    //porque el Flatlist hace un lazy loading
    //y destruye los componentes asi como tambien los usa solo cuando es necesario
    const isMounted = useRef(true);

    useEffect(() => {

        //para no incurrir en memory leaks es necesario considerar actualizar esta card solo si esta montada
        if (isMounted.current) {
            const { id } = pokemon;
            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            ImageColors.getColors(url, {
                fallback: 'grey', //vale la pena ponerlo por si viene undefined
                key: url,
            }).then(result => {
                if (result.platform === 'android') {
                    return setBgColor(result.dominant ?? 'grey');
                } else {
                    return setBgColor(result.background ?? 'grey');
                }
            });
        }

        //al desmontarse el compomente guardo esta condicion para que no se dispare el useEffect
        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Pokemon', {
                simplePokemon: pokemon,
                color: bgColor,
            })}
        >
            <View style={{
                ...styles.cardContainer,
                backgroundColor: bgColor,
                width: windowWidth * 0.4,
            }}>
                <View>
                    <Text style={{ ...styles.name }}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity >
    );
};


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'gray',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -20,

    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.4,

    },
});


