
import React from 'react';
import ContadorScreen from './src/screens/ContadorScreen';
/* import BoxObjectModelScreen from './src/components/BoxObjectModelScreen'; */
import { SafeAreaView } from 'react-native';
/*import TareaScreen from './src/screens/TareaScreen';
import FlexScreen from './src/screens/FlexScreen';
 import DimensionesScreen from './src/screens/DimensionesScreen';
import PositionScreen from './src/screens/PositionScreen';
import FlexScreen from './src/screens/FlexScreen';
 */
/* import HolaMundoScreen from './src/screens/HolaMundoScreen'; */

const App = () => {
  return (

    //Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13).
    <SafeAreaView style={{ flex: 1 }}>
      <ContadorScreen />
      {/*
      <HolaMundoScreen />

      <BoxObjectModelScreen />
      <DimensionesScreen />
      <PositionScreen />
      <FlexScreen />
      <TareaScreen />
      */
      }
    </SafeAreaView>
  );
};

export default App;
