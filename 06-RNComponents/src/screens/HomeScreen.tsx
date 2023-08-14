import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';




export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={styles.title}>Opciones de Menú</Text>
            </View>
        );
    };

    const itemSeparator = () => {
        return (
            <View
                style={{ borderBottomWidth: 5, opacity: 0.4, marginVertical: 5 }} />
        );
    };
    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={item => item.name}
                ListHeaderComponent={renderListHeader} //un componente que funciona como header, puede tener un estilo diferente al resto de la flatList
                ItemSeparatorComponent={itemSeparator} //algo para renderizar entre item e item para separar
            />
        </View>
    );
};
