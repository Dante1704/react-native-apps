import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
//import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
    const { top: paddingTop } = useSafeAreaInsets(); //a la vez que lo desestructuro lo renombro asi puedo usar object literal en el style
    return (
        <Tab.Navigator
            style={{ paddingTop }} //para iOS
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={
                //manera centralizada de controlar todos los iconos para no tener tanto codigo en cada Tab.Screen
                ({ route }) => ({
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ color/* , focused, size  */ }) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'Chat':
                                iconName = 'chatbox-ellipses-outline';
                                break;
                            case 'Contacts':
                                iconName = 'people';
                                break;
                            case 'Albums':
                                iconName = 'albums';
                                break;
                        }
                        return <Icon name={iconName} size={25} color={color} />; // <Text style={{ color }}>{iconName}</Text>
                    },
                    //para estilar las tabs
                    tabBarPressColor: colores.primary, //Color for material ripple.Only supported on Android.
                    tabBarIndicatorStyle: { backgroundColor: colores.primary }, //Style object for the tab bar indicator.
                })}

        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}
