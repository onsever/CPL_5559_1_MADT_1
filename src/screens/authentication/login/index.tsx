import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorProps} from '../../../navigators/AuthStackNavigator';
import {styles} from './styles';
import Input from '../../../components/Input';

type LoginScreenProps = NativeStackScreenProps<
  AuthStackNavigatorProps,
  'Login'
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
