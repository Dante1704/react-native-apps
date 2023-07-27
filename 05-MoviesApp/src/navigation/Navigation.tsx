import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

//tipado de las rutas segun recomendacion de react docs
export type RootStackParams = {
    //los que tineen undefined significa que no reciben nada, el tipado es intencional
    HomeScreen: undefined,
    DetailScreen: Movie,
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        //El stack navigator funciona como el DOM Tree y si estilo el navigator, es como estilar el html entero
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            {/* //desde aca puedo estilar cada screen en general con "cardStyle", si el componente esta renderizado con fragments*/}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ cardStyle: { backgroundColor: '#f5f5f5' } }} />

        </Stack.Navigator>
    );
};

