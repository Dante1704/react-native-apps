import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';



const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        components: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        components: 'Animation102Screen',
    },
];
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
