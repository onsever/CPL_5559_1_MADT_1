import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';
import {styles} from './styles';

type ProfileScreenProps = NativeStackScreenProps<HomeStackNavigatorProps, 'Profile'>;

const ProfileScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
