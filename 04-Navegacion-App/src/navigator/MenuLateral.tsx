import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
//import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();


export function MenuLateral() {

    const dimensions = useWindowDimensions(); //hook para obtener las dimensiones del mobile

    return (
        /* atributo options para configurar el drawer */
        <Drawer.Navigator
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front', //si esta horizontal que el drawer quede fijo
                drawerPosition: 'right', //cambiarlo al lado derecho
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerContent={(props) => <MenuInterno {...props} />} //este atributo me sirve para crear el contenido del drawer, no puedo ponerlos con Views o Text
        >{/* aca defino las pantallas va a tener el drawer */}
            <Drawer.Screen name="Tabs" component={/* StackNavigator */ Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

//para tipar las props de este menu interno me pare con el mouse sobre el atributo drawerContent del Drawer.Navigator
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        //Este es un componente necesario para customizar el contenido del drawer
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                {/* componente para imagenes */}
                <Image source={{
                    uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
                }}
                    style={styles.avatar} />
            </View>
            {/* Opciones del menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate(/* 'StackNavigator' */'Tabs')}>
                    <Text style={styles.menuTexto}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
