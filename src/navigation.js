import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {HomeStackNavigator} from './navigators/HomeStackNavigator';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  getSessionInfoFromLocal,
  removeSessionInfoFromLocal,
  setSessionInfoInLocal,
} from './helpers/common';
import {supabase} from './utilities/Supabase';

export const AppNavigation = () => {
  let [user, setUser] = useState("null");
  const dispatch = useDispatch();


  useEffect(() => {
    // check if user is logged in
    // from the local storage
    const checkSession = async () => {
      let status = await getSessionInfoFromLocal();
      //console.log("checkSession ", status);
      if (status) {
        setUser(status);
      }
    };

    checkSession(); // call the check session function

    // listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
      //console.log("onAuthStateChange " + session);
      if (session && session.user) {
        setUser(session.user);
        setSessionInfoInLocal(session);
      } else {
        setUser(null);
        removeSessionInfoFromLocal();
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {user ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
