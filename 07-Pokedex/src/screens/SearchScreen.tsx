/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { styles } from '../theme/Theme';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [term, setterm] = useState('');
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        if (term.length === 0) {
            return setPokemonFiltered([]);
        }
        setPokemonFiltered(simplePokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(term.toLowerCase())));
    }, [term]);

    if (isFetching) {
        return (
            <Loading />
        );
    }

    return (
        <View style={{
            flex: 1,
            //lo quito para que llegue hasta arriba cuando scroll en ios
            //marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20,
        }}>
            <SearchInput
                onDebounce={(value) => setterm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 20,

                }}
            />
            <FlatList
                data={pokemonFiltered}
                keyExtractor={(pokemon) => pokemon.id}
                numColumns={2} // Multiple columns
                renderItem={({ item }) =>
                    <PokemonCard pokemon={item} />
                }
                ListHeaderComponent={<Text
                    style={{
                        ...styles.title,
                        top: top + 20,
                        paddingBottom: 10,
                        ...styles.globalMargin,
                        marginTop: (Platform.OS === 'ios') ? top + 50 : top + 50,
                        marginBottom: top + 20,
                        ...styles.textDark,
                    }}>
                    {term}
                </Text>}
            />
        </View>
    );
};

