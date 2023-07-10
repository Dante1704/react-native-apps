import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { MenuLateral } from './src/navigator/MenuLateral';
/* import { MenuLateralBasico } from './src/navigator/MenuLateralBasico'; */
/* import { StackNavigator } from './src/navigator/StackNavigator'; */

const theme = { colors: {} };

function App(): JSX.Element {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
      </NavigationContainer>
    </PaperProvider>
  );
}

/* const styles = StyleSheet.create({
}); */

export default App;
