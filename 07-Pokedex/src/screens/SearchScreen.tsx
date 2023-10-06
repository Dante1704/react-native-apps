import React from 'react';
import { ActivityIndicator, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { styles } from '../theme/Theme';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    if (isFetching) {
        return (
            <View style={{
                ...stylesSearchScreen.activityContainer,
            }}>
                <ActivityIndicator
                    size={50}
                    color={'grey'}
                />
                <Text> Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={{
            flex: 1,
            marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20,
        }}>
            <SearchInput />
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
            />
        </View>
    );
};

const stylesSearchScreen = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
