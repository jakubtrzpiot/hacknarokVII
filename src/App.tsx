/* eslint-disable prettier/prettier */

import React from 'react';
import BottomTab from './navigators/BottomTab';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
