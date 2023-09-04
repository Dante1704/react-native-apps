import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator as Navigator } from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
