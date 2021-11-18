import React from "react";
import Home from './screens/Home'
import Menu from './screens/Settings'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Note from './screens/Note'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import TabComponent from './components/Tab';
const Tab = createBottomTabNavigator(
);
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default function()
{
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel:false,
          tabBarStyle:{
            position:"absolute",
            bottom: 20,
            left: 10,
            right:10,
            elevation:0,
            borderRadius:15,
            height:35,
            backgroundColor: '#6E0B14'
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => <TabComponent label="home"  icon_="home" {...props} />,
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="folder" {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Note"
          component={Note}
          options={{
            tabBarButton: (props) => <TabComponent label="note" {...props} />,
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarButton: (props) => <TabComponent label="menu" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor:"#7F5DF0",
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
})