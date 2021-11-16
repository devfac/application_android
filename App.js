import React from "react";
import Home from './screens/Home'
import Setting from './screens/Settings'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();
import {
  Text,
  View,
  Button
} from 'react-native'

export default function()
{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/> 
        <Tab.Screen name='Setting' component={Setting}/> 
      </Tab.Navigator>
    </NavigationContainer>
  )
}