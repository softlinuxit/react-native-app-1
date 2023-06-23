/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home';
import Create from './src/screens/Create/Create';
import Settings from './src/screens/Settings/Settings';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator()

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'black',
            marginLeft: 30,
            marginRight: 30,
            marginBottom: 20,
            borderRadius: 30,
            height: 60
          },

          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } else if (route.name === 'Create') {
              iconName = focused
                ? 'create'
                : 'create-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'settings'
                : 'settings-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={30}
                color={color}
              />
            );
          }
        })}>

        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Create"
          component={Create}
        />
        <Tab.Screen
          name="Settings"
          component={Settings} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;