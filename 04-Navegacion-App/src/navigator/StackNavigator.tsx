import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';


//tipado de las rutas segun recomendacion de react docs
export type RootStackParams = {
    //los que tineen undefined significa que no reciben nada, el tipado es intencional
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: { id: number, nombre: string }

}

const Stack = createStackNavigator<RootStackParams>();

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
                //lo de arriba es igual a esto  headerShadowVisible: false,
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
            <Stack.Screen
                name="PersonaScreen"
                options={{ title: 'Persona' }}
                component={PersonaScreen}
            />
        </Stack.Navigator>
    );
};
