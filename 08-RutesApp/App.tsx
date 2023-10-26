import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigator/MainStackNavigator';
import { PermissionsProvider } from './src/context/Permissions';

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  );
};


const App = () => {

  return (

    <NavigationContainer>
      <AppState>
        <MainStackNavigator />
      </AppState>
    </NavigationContainer>


  );
};

export default App;
