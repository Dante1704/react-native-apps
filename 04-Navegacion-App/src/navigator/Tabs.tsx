import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
//import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';

const Tab = createBottomTabNavigator();
//OJO! cuando yo me muevo entre tabs, los useEffect que los mismos tengan solo se van a disparar la primera vez que muevo, luego ya no
export function Tabs() {
    return (
        <Tab.Navigator
            //el style del screen excepto el menu de tabs
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                tabBarActiveTintColor: colores.primary, //a la tab activa le pone color red
                //para estilar las tabs
                tabBarStyle: {
                    borderTopColor: colores.primary, //borde superior del menu de tabs
                    //con las siguientes dos propiedades evito que haya una separacion entre el menu de tabs y el resto del screen
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}>
            {/* headerShown: false si no quiero mostrar el header que dice tab1 */}
            <Tab.Screen /* options={{ headerShown: false }} */ name="Tab1" component={Tab1Screen} />
            <Tab.Screen name="Tab2" component={Tab2Screen} />
            <Tab.Screen name="StackNavigator" component={StackNavigator} />
        </Tab.Navigator>
    );
}
