import React from 'react';
import HomeScreen, {Movie} from '../screens/home';
import ProfileScreen from '../screens/profile';
import ReadReviewsScreen from '../screens/readreviews';

import {createDrawerNavigator} from '@react-navigation/drawer';

export type HomeStackNavigatorProps = {
  Home: undefined;
  Profile: undefined;
  ReadReviews: {movie: Movie};
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
      <Drawer.Screen name="ReadReviews" component={ReadReviewsScreen} />
    </Drawer.Navigator>
  );
};
