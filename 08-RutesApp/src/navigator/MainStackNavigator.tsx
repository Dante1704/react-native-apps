import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Permissions } from '../screens/Permissions';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'white' },
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Permissions" component={Permissions} />
        </Stack.Navigator>
    );
};
