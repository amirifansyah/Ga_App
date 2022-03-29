import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from '../Screen/WelcomeScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import SigInScreen from '../Screen/SigInScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName='WelcomeScreen'>
    <Stack.Screen
      name="welcomeScreen"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="login" component={SigInScreen} />
    <Stack.Screen name="signup" component={SignUpScreen} />
  </Stack.Navigator>
);
function WelcomeNavigator() {
  return <StackNavigator />
}

export default WelcomeNavigator