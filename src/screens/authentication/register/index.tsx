import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorProps} from '../../../navigators/AuthStackNavigator';
import {styles} from './styles';
import Input from '../../../components/Input';
import MainTitle from '../../../components/MainTitle';
import Button from '../../../components/Button';
import Colors from '../../../utilities/Colors';

type RegisterScreenProps = NativeStackScreenProps<
  AuthStackNavigatorProps,
  'Register'
>;

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const [fullName, setFullName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleLogin = () => {
    navigation.pop();
  };

  const handleSignUp = () => {
    console.log('Full Name: ' + fullName);
    console.log('Username: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);
    console.log('Confirm Password: ' + confirmPassword);
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <MainTitle title="Movie Buff" fontSize={40} color={Colors.purple} />
          <MainTitle
            title="The Land of Movie Critics"
            fontSize={24}
            color={Colors.purple}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Full Name:</Text>
            <Input placeholder="" value={fullName} onChangeText={setFullName} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Username:</Text>
            <Input placeholder="" value={username} onChangeText={setUsername} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email:</Text>
            <Input
              placeholder=""
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password:</Text>
            <Input
              placeholder=""
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Confirm Password:</Text>
            <Input
              placeholder=""
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />
          </View>
        </View>

        <Button onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Button>

        <TouchableOpacity onPress={handleLogin} style={styles.signUpButton}>
          <Text style={styles.signUpText}>Do you have an account?</Text>
          <Text style={styles.signUpFocus}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
