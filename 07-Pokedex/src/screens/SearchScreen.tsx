import React from 'react';
import { FlatList, Text, View, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { styles } from '../theme/Theme';
import { Loading } from '../components/Loading';


const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

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
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 20,

                }}
            />
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
                        top: top + 20,
                        paddingBottom: 10,
                        ...styles.globalMargin,
                        marginTop: (Platform.OS === 'ios') ? top + 50 : top + 50,
                        marginBottom: top + 20,
                        ...styles.textDark,
                    }}>
                    Pokedex
                </Text>}
            />
        </View>
    );
};

