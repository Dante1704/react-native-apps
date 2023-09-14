import React from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';
import { styles } from '../theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';


export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <View style={styles.centerContent}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    numColumns={2} // Multiple columns
                    renderItem={({ item }) =>
                        <PokemonCard pokemon={item} />
                    }
                    ListHeaderComponent={<Text
                        style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            marginBottom: top + 20,
                            ...styles.textDark,
                            top: top + 20,
                            paddingBottom: 10,
                        }}>
                        Pokedex
                    </Text>}
                    //infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.3}
                    ListFooterComponent={
                        <View style={{ height: 100, width: '100%' }}>
                            <ActivityIndicator size={25} color={'gray'} />
                        </View>
                    }
                />
            </View>
        </>
    );
};


