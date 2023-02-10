import React from 'react';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';

import {createDrawerNavigator} from '@react-navigation/drawer';

export type HomeStackNavigatorProps = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<HomeStackNavigatorProps>();

export const HomeStackNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
