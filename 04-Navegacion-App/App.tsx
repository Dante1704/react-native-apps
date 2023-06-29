import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
}); */

export default App;
