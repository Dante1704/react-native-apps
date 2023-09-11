import React from 'react';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';


export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, simplePokemonList } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <Text style={{
                ...styles.textDark,
                ...styles.title,
                top: top + 20,
            }}>Pokedex</Text>
        </>
    );
};


