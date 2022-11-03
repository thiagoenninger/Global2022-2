import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './src/routes/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar/>
    </NavigationContainer>
  );
}
