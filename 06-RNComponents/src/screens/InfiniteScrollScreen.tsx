import React, { useState } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);


    //esta funcion agrega mas numeros cuando llega al final del scroll
    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        setNumbers([...numbers, ...newArray]);
    };


    return (
        <View>
            <FlatList
                ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.textItem}>{item}</Text>
                )}
                //esto indica que cuando falta la mitad para llegar al final, se dispara la funcion de onEndReached
                onEndReachedThreshold={0.5}
                //la funcion que se va a disparar cuando llegue al final del scroll segun el valor de onEndReachedThreshold
                onEndReached={loadMore}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
    },
});
