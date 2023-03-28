import React from 'react';
import HomeScreen, {Movie} from '../screens/home';
import ReadReviewsScreen from '../screens/readreviews';
import CastAndCrewScreen from '../screens/castandcrew';
import SynopsisScreen from '../screens/synopsis';
import WriteReviewScreen from '../screens/writereview';

import Header from '../components/header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export type HomeStackNavigatorProps = {
  Home: undefined;
  Profile: undefined;
  ReadReviews: {movie: Movie};
  CastAndCrew: {movie: Movie};
  Synopsis: {movie: Movie};
};

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={({navigation}) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Main Page" />
          ),
        })}
        component={HomeScreen}
      />
      <Stack.Screen name="Read Reviews" component={ReadReviewsScreen} />
      <Stack.Screen name="CastAndCrew" component={CastAndCrewScreen} />
      <Stack.Screen name="Synopsis" component={SynopsisScreen} />
      <Stack.Screen name="Write Review" component={WriteReviewScreen} />

    </Stack.Navigator>
  );
};
