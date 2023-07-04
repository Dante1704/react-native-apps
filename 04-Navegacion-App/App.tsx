import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
/* import { StackNavigator } from './src/navigator/StackNavigator'; */


function App(): JSX.Element {

  return (
    <NavigationContainer>
      {/*<StackNavigator /> */}
      <MenuLateralBasico />
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
}); */

export default App;
