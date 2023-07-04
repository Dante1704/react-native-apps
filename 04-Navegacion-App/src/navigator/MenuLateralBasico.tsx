import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export function MenuLateralBasico() {

    const dimensions = useWindowDimensions(); //hook para obtener las dimensiones del mobile

    return (
        /* atributo options para configurar el drawer */
        <Drawer.Navigator
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front', //si esta horizontal que el drawer quede fijo
                drawerPosition: 'right', //cambiarlo al lado derecho
            }}>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
