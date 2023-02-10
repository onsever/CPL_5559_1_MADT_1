import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';
import {styles} from './styles';

type HomeScreenProps = NativeStackScreenProps<HomeStackNavigatorProps, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
