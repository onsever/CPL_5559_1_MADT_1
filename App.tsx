import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import {HomeStackNavigator} from './src/navigators/HomeStackNavigator';

export default function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  // Check if user is logged in.
  React.useEffect(() => {}, [currentUser]);

  return (
    <NavigationContainer>
      {currentUser ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
