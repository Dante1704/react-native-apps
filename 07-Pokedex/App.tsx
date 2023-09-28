import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator as Navigator } from './src/navigation/Navigation';
import { Tabs } from './src/navigation/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      {/*
      Una vez creado el menu de tabs, esto ya no va mas aca, porque ahora el navigation esta envuelto por el Tabs, es parte de este.
      <Navigator />
      */}
      <Tabs />
    </NavigationContainer>
  );
}
