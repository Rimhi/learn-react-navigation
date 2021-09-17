

import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import DrawerNavigator from "./src/navigator/DrawerNavigator";
import DrawerNavigatorComplete from "./src/navigator/DrawerNavigatorComplete";
const App = () => {
  return (

      <NavigationContainer>
        <DrawerNavigatorComplete/>
      </NavigationContainer>

  );
};



export default App;
