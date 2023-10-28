import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsContext } from '../context/Permissions';
import { Home } from '../screens/Home';
import { Permissions } from '../screens/Permissions';
import { Loading } from '../screens/Loading';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {

    const { permissions } = useContext(PermissionsContext);

    if (permissions.locationStatus === 'unavailable') { return <Loading />; }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'white' },
            }}
        >
            {
                (permissions.locationStatus === 'granted')
                    ? <Stack.Screen name="Home" component={Home} />
                    : <Stack.Screen name="Permissions" component={Permissions} />
            }


        </Stack.Navigator>
    );
};
