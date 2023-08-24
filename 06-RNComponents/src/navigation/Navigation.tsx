import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';


//tipado de las rutas segun recomendacion de react docs
export type RootStackParams = {
    //los que tineen undefined significa que no reciben nada, el tipado es intencional
    HomeScreen: undefined,
    Animation101Screen: undefined,
    Animation102Screen: undefined,
    SwitchScreen: undefined,
    AlertScreen: undefined,
    TextInputScreen: undefined,
    PullToRefreshScreen: undefined,
    CustomSectionListScreen: undefined,
    ModalScreen: undefined,
    InfiniteScrollScreen: undefined,
    SlidesScreen: undefined,
    ChangeThemeScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        //El stack navigator funciona como el DOM Tree y si estilo el navigator, es como estilar el html entero
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    //backgroundColor: 'white', //aca estoy forzando blanco, si aplicara un darktheme no funcionaria
                },
            }}>
            {/* //desde aca puedo estilar cada screen en general con "cardStyle", si el componente esta renderizado con fragments*/}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
            <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="AlertScreen" component={AlertScreen} />
            <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
            <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
            <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
            <Stack.Screen name="ModalScreen" component={ModalScreen} />
            <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
            <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
            <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
        </Stack.Navigator>
    );
};

