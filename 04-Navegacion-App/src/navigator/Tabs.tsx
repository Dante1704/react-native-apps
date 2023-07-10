import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
//import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';


export const Tabs = () => {

    return Platform.OS === 'ios'
        ? <TabIOS />
        : <TabsAndroid />;
};




const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
    return (
        <BottomTabAndroid.Navigator
            activeColor="white"//color tab activa
            inactiveColor={colores.secondary}
            shifting={true}
            barStyle={{ backgroundColor: colores.primary }}
            screenOptions={
                //manera centralizada de controlar todos los iconos para no tener tanto codigo en cada Tab.Screen
                ({ route }) => ({
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ color/* , focused, size  */ }) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'Tab1':
                                iconName = 'T1';
                                break;
                            case 'Tab2':
                                iconName = 'T2';
                                break;
                            case 'StackNavigator':
                                iconName = 'StNav';
                                break;
                        }
                        return <Text style={{ color }}>{iconName}</Text>;
                    },
                    //para estilar las tabs
                    tabBarStyle: {
                        borderTopColor: colores.primary, //borde superior del menu de tabs
                        //con las siguientes dos propiedades evito que haya una separacion entre el menu de tabs y el resto del screen
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                })}>
            <BottomTabAndroid.Screen name="Tab1" component={Tab1Screen} /* options={{}} */ />
            <BottomTabAndroid.Screen name="Tab2" component={Tab2Screen} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}




const BottomTabIOS = createBottomTabNavigator();
//OJO! cuando yo me muevo entre tabs, los useEffect que los mismos tengan solo se van a disparar la primera vez que muevo, luego ya no
function TabIOS() {
    return (
        <BottomTabIOS.Navigator
            //el style del screen excepto el menu de tabs
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={
                //manera centralizada de controlar todos los iconos para no tener tanto codigo en cada Tab.Screen
                ({ route }) => ({
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ color/* , focused, size  */ }) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'Tab1':
                                iconName = 'T1';
                                break;
                            case 'Tab2':
                                iconName = 'T2';
                                break;
                            case 'StackNavigator':
                                iconName = 'StNav';
                                break;
                        }
                        return <Text style={{ color }}>{iconName}</Text>;
                    },
                    tabBarActiveTintColor: colores.primary, //a la tab activa le pone color morado
                    //para estilar las tabs
                    tabBarStyle: {
                        borderTopColor: colores.primary, //borde superior del menu de tabs
                        //con las siguientes dos propiedades evito que haya una separacion entre el menu de tabs y el resto del screen
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                })}>
            {/* headerShown: false si no quiero mostrar el header que dice tab1 */}
            {/* <Tab.Screen
                options={{
                    headerShown: false,
                    // manera individual en cada Tab.Screen de poner un icono
                    tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>, //props.color el color que le hereda el padre
                }}
                name="Tab1"
                component={Tab1Screen}
            /> */}
            <BottomTabIOS.Screen name="Tab1" component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2" component={Tab2Screen} />
            <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}
