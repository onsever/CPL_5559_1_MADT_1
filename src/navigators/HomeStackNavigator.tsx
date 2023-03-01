import React from 'react';
import HomeScreen, {Movie} from '../screens/home';
import ProfileScreen from '../screens/profile';
import ReadReviewsScreen from '../screens/readreviews';
import {logoutUser} from '../store/auth/authActions';
import {useDispatch} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export type HomeStackNavigatorProps = {
  Home: undefined;
  Profile: undefined;
  ReadReviews: {movie: Movie};
};

const Drawer = createDrawerNavigator<HomeStackNavigatorProps>();

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
}

export const HomeStackNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="ReadReviews" component={ReadReviewsScreen} />
    </Drawer.Navigator>
  );
};
