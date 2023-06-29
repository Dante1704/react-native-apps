import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { Pagina4Screen } from '../screens/Pagina4Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
            <Stack.Screen name="Pagina4Screen" component={Pagina4Screen} />
        </Stack.Navigator>
    );
};
