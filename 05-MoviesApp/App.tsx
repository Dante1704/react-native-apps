import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';
//import { FadeScreen } from './src/screens/FadeScreen';


interface Props {
  children: JSX.Element | JSX.Element[]
}



const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};


const AppState = ({ children }: Props) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  );
};

export default App;
