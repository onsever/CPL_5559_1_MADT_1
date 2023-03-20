import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from '../screens/profile';
import Header from '../components/header';

export type ProfileStackNavigatorProps = {
  Profile: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackNavigatorProps>();

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="User Profile">
      <Stack.Screen
        name="User Profile"
        options={({navigation}) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Profile" />
          ),
        })}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
