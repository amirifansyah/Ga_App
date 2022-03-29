import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUpScreen from '../Screen/SignUpScreen';
import SigInScreen from '../Screen/SigInScreen';
import DashboardScreen from '../Screen/DashboardScreen';
import RequestScreen from '../Screen/RequestScreen';
import ListScreen from '../Screen/ListScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator  
        initialRouteName="Request"
        options={{
            activeBackgroundColor : "#ffd600",
            activeTintColor:"#eee",
            inactiveBackgroundColor : "#eee",
            inactiveTintColor: "black",
        }}
        >
            <Tab.Screen name="DashboardScreen " component={DashboardScreen} />
            <Tab.Screen name="Request " component={RequestScreen} />
            <Tab.Screen name="List Of Items" component={ListScreen}/>
    </Tab.Navigator>
  )
}

export default AppNavigator