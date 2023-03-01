import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorProps} from '../../../navigators/AuthStackNavigator';
import {styles} from './styles';
import Input from '../../../components/Input';
import MainTitle from '../../../components/MainTitle';
import Button from '../../../components/Button';
import Colors from '../../../utilities/Colors';
import {signUp} from '../../../store/auth/authActions';
import {useDispatch, useSelector} from 'react-redux';

type RegisterScreenProps = NativeStackScreenProps<
  AuthStackNavigatorProps,
  'Register'
>;

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const {error} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleLogin = () => {
    navigation.pop();
  };

  const handleSignUp = () => {
    var firstNameValid = false;
    if (firstName.length === 0) {
      setFirstNameError('First Name is required');
    } else {
      setFirstNameError('');
      firstNameValid = true;
    }

    var lastNameValid = false;
    if (lastName.length === 0) {
      setLastNameError('Last Name is required');
    } else {
      setLastNameError('');
      lastNameValid = true;
    }

    var emailValid = false;
    if (email.length === 0) {
      setEmailError('Email is required');
    } else if (email.length < 6) {
      setEmailError('Email should be minimum 6 characters');
    } else if (email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces');
    } else {
      setEmailError('');
      emailValid = true;
    }

    var passwordValid = false;
    if (password.length === 0) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password should be minimum 6 characters');
    } else if (password.indexOf(' ') >= 0) {
      setPasswordError('Password cannot contain spaces');
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
      passwordValid = true;
    }

    var confirmPasswordValid = false;
    if (confirmPassword.length === 0) {
      setConfirmPasswordError('Confirm Password is required');
    } else if (confirmPassword.length < 6) {
      setConfirmPasswordError(
        'Confirm Password should be minimum 6 characters',
      );
    } else if (confirmPassword.indexOf(' ') >= 0) {
      setConfirmPasswordError('Confirm Password cannot contain spaces');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
      confirmPasswordValid = true;
    }

    if (
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      passwordValid &&
      confirmPasswordValid
    ) {
      dispatch(signUp(email, password, firstName, lastName));
    }
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
            <Text style={styles.inputText}>First Name:</Text>
            <Input
              placeholder=""
              value={firstName}
              onChangeText={setFirstName}
            />
            {firstNameError.length > 0 && (
              <Text style={styles.errorText}>{firstNameError}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Last Name:</Text>
            <Input placeholder="" value={lastName} onChangeText={setLastName} />
            {lastNameError.length > 0 && (
              <Text style={styles.errorText}>{lastNameError}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email:</Text>
            <Input
              placeholder=""
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            {emailError.length > 0 && (
              <Text style={styles.errorText}>{emailError}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password:</Text>
            <Input
              placeholder=""
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            {passwordError.length > 0 && (
              <Text style={styles.errorText}>{passwordError}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Confirm Password:</Text>
            <Input
              placeholder=""
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />
            {confirmPasswordError.length > 0 && (
              <Text style={styles.errorText}>{confirmPasswordError}</Text>
            )}
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
