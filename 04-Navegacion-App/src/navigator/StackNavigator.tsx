import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            /*// initialRouteName="Pagina2Screen" si quiero empezar en otra pagina que no sea la primera declarada*/
            screenOptions={{
                //para quitar la linea que separa el navigator del android
                headerStyle: {
                    elevation: 0, //para android
                    shadowColor: 'transparent', //para ios
                },
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen
                name="Pagina1Screen"
                options={{ title: 'Pagina1' }}
                component={Pagina1Screen}
            />
            <Stack.Screen
                name="Pagina2Screen"
                options={{ title: 'Pagina2' }}
                component={Pagina2Screen}
            />
            <Stack.Screen
                name="Pagina3Screen"
                options={{ title: 'Pagina3' }}
                component={Pagina3Screen}
            />
        </Stack.Navigator>
    );
};
