import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
/* import { MenuLateralBasico } from './src/navigator/MenuLateralBasico'; */
/* import { StackNavigator } from './src/navigator/StackNavigator'; */

const theme = { colors: {} };

function App(): JSX.Element {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppState>
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico /> */}
          <MenuLateral />
        </AppState>
      </NavigationContainer>
    </PaperProvider>
  );
}

/* const styles = StyleSheet.create({
}); */

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};
export default App;
