import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStackNavigator} from '../navigators/HomeStackNavigator';
import {ProfileStackNavigator} from '../navigators/ProfileStackNavigator';
import {logoutUser} from '../store/auth/authActions';
import {useDispatch} from 'react-redux';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

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
  
export const DrawerNavigator = () => {
  return (
    /* Hide the header in the drawer navigation and let the 1st screen in the
     * stack navigator handle the header display. 
     * Doing this will prevent display of headers in both drawer & stack and 
     * ultimately allow us to display the header and back buttons properly.
     */
    <Drawer.Navigator
      initialRouteName="Main Page"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Main Page" component={HomeStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
};
