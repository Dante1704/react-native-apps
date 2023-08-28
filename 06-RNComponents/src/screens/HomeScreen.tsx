import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../theme/Theme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';




export const HomeScreen = () => {


    const renderListHeader = () => {
        return (
            <HeaderTitle
                title="Opciones de Menú"
            />
        );
    };



    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={item => item.name}
                ListHeaderComponent={renderListHeader} //un componente que funciona como header, puede tener un estilo diferente al resto de la flatList
                ItemSeparatorComponent={ItemSeparator} //algo para renderizar entre item e item para separar
            />
        </View>
    );
};
