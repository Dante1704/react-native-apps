import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigation } from './src/navigation/Navigation';
//import { FadeScreen } from './src/screens/FadeScreen';


const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
