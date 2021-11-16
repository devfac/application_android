import React from "react";
import Home from './screens/Home'
import Setting from './screens/Settings'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator(
);
import {
  Text,
  View
} from 'react-native'

export default function()
{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name='Home' 
        component={Home} 
        
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
          ) }}
        />
        <Tab.Screen 
        name="Settings" 
        component={Setting}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="message-text" color={color} size={size} />
        ) }}
       /> 
      </Tab.Navigator>
    </NavigationContainer>
  )
}