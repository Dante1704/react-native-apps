import React, { useContext, useState } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { Image, View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {

    const { theme } = useContext(ThemeContext);

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);


    //esta funcion agrega mas numeros para renderizar cuando llega al final del scroll
    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        //para darle tiempo a las imagenes que se carguen
        setTimeout(() => setNumbers([...numbers, ...newArray]), 1000);

    };

    const renderHeaderTitle = () =>
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
        </View>;

    const renderActivityIndicator = () => (
        <View style={{ height: 100, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={25} color={theme.colors.primary} />
        </View>
    );


    return (
        <View>
            <FlatList
                ListHeaderComponent={renderHeaderTitle}
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
                        style={{
                            width: '100%',
                            height: 200,
                        }}
                    />
                )}
                //esto indica que cuando falta la mitad para llegar al final, se dispara la funcion de onEndReached
                onEndReachedThreshold={0.5}
                //la funcion que se va a disparar cuando llegue al final del scroll segun el valor de onEndReachedThreshold
                onEndReached={loadMore}
                //este footer se muestra una y otra vez gracias a que va quedando ultimo cada vez que agrego mas imagenes
                ListFooterComponent={renderActivityIndicator}
            />
        </View>
    );
};

