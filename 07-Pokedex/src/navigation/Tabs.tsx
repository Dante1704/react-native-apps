import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './Navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tabs2 } from './Tab2';

const Tab = createBottomTabNavigator();


//Aca no hay que mostrar el HomeScreen, sino el Navigation que contiene a Home y Detail
export const Tabs = () => {

    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 5,
                },
                tabBarStyle: {
                    borderWidth: 0,
                    elevation: 0,
                    //transparente
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.92)',
                },
            }}
        >
            <Tab.Screen
                name="Poke List"
                component={StackNavigator}
                options={{
                    tabBarLabel: 'Poke List',
                    tabBarIcon: (({ color }) => <Icon
                        color={color}
                        size={25}
                        name="list-outline"
                    />),
                }}
            />
            <Tab.Screen
                name="Tab2"
                component={Tabs2}
                options={{
                    tabBarLabel: 'Poke Search',
                    tabBarIcon: (({ color }) => <Icon
                        color={color}
                        size={25}
                        name="search-outline"
                    />),
                }}
            />
        </Tab.Navigator>
    );
};
