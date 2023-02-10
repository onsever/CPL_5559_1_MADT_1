import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorProps} from '../../../navigators/AuthStackNavigator';
import {styles} from './styles';

type RegisterScreenProps = NativeStackScreenProps<
  AuthStackNavigatorProps,
  'Register'
>;

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
