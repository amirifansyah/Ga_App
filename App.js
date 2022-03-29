import React from 'react';
import { NativeBaseProvider,extendTheme, Text, Box, Button, Heading} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './src/Navigations/AppNavigator';
import useAuthentication from './src/Api/useAuthentication';
import WelcomeNavigator from './src/Navigations/WelcomeNavigator';

const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };
const theme = extendTheme({ colors: newColorTheme });

export default function App() {

  const user = useAuthentication();

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {!user ? <WelcomeNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}