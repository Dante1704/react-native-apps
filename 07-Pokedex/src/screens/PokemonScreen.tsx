import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon: { name, id, picture }, color } = route.params;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon(id);

    console.log(pokemon);


    return (
        <View style={{ flex: 1 }}>
            {/* Header Container */}
            <View style={{
                ...stylesPokemonScreen.headerContainer,
                backgroundColor: color,
            }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        ...stylesPokemonScreen.backButton,
                        top: top + 10,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="arrow-back-outline"
                        color={'white'}
                        size={40}
                    />
                </TouchableOpacity>
                {/* Pokemon Title */}
                <Text
                    style={{
                        ...stylesPokemonScreen.pokemonName,
                        top: top + 40,
                    }}
                >
                    {name + '\n'} # {id}
                </Text>
                {/* Pokebola Blanca */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={stylesPokemonScreen.pokebola}
                />

                <FadeInImage
                    uri={picture}
                    style={stylesPokemonScreen.pokemonImage}
                />
            </View>
            <View
                style={stylesPokemonScreen.activityIndicator}>
                <ActivityIndicator
                    size={100}
                    color={color}
                />
            </View>
        </View>
    );
};

const stylesPokemonScreen = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 10,
    },
    pokemonName: {
        left: 10,
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
    },
    pokebola: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -20,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
