import React from 'react';
import { Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {
    const { simplePokemon, color } = route.params;

    return (
        <>
            <Text>{simplePokemon.name}</Text>
            <Text>{color}</Text>
        </>
    );
};
