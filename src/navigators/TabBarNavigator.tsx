import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeStackNavigator} from './HomeStackNavigator';
import {ProfileStackNavigator} from './ProfileStackNavigator';

export type TabBarNavigatorProps = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<TabBarNavigatorProps>();

export const TabBarNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackNavigator}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};
