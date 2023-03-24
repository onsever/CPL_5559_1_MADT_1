import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MapScreen from '../screens/maps';
import Header from '../components/header';

export type MapStackNavigatorProps = {
  Map: undefined;
};

const Stack = createNativeStackNavigator<MapStackNavigatorProps>();

export const MapStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Maps">
      <Stack.Screen
        name="Maps"
        options={({navigation}) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Map" /> 
          ),
        })}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};
