import 'react-native-gesture-handler';
import React from 'react';
//import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';


//todas las propiedades que estan debajo son obligatorias para crear un Custom Theme
//este custom theme solo se aplica a la parte de la navegacion.
//si necesito utilizarlo en otro lado, lo tengo que aplicar a mano
/*
const MyTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors, //el tema por default que me ofrece react native.
    //...DarkTheme,//de esta manera estoy personalizando mi theme con los colores por defecto que ya me trae el DarkTheme
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
*/

const App = () => {
  return (
    <ThemeProvider>

      <Navigation />

    </ThemeProvider>
  );
};

export default App;
