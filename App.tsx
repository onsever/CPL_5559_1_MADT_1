import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import {TabBarNavigator} from './src/navigators/TabBarNavigator';
import {HomeStackNavigator} from './src/navigators/HomeStackNavigator';

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentUser, setCurrentUser] = React.useState('Vergel');
  // Check if user is logged in.
  React.useEffect(() => {}, [currentUser]);

  return (
    <NavigationContainer>
      {currentUser ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
