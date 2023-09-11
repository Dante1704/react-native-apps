import React from 'react';
import { Text, Image, ActivityIndicator, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FlatList } from 'react-native-gesture-handler';


export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

    const renderPokemons = ({ item, index }) => {

    };

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            {/* <Text style={{
                ...styles.textDark,
                ...styles.title,
                top: top + 20,
            }}>Pokedex</Text> */}
            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({ item }) => <Image
                    source={{ uri: item.picture }}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                />}

                //infinite scroll
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.3}
                ListFooterComponent={
                    <View style={{ height: 100, width: '100%' }}>
                        <ActivityIndicator size={25} color={'gray'} />
                    </View>
                }
            />
        </>
    );
};


