import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/authentication/login';
import RegisterScreen from '../screens/authentication/register';

export type AuthStackNavigatorProps = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackNavigatorProps>();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
