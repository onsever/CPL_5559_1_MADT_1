import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorProps} from '../../../navigators/AuthStackNavigator';
import {styles} from './styles';
import Input from '../../../components/Input';
import MainTitle from '../../../components/MainTitle';
import Button from '../../../components/Button';
import Colors from '../../../utilities/Colors';
import {loginUser} from '../../../store/auth/authActions';
import {useDispatch, useSelector} from 'react-redux';

type LoginScreenProps = NativeStackScreenProps<
  AuthStackNavigatorProps,
  'Login'
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {error} = useSelector(state => state.authReducer);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser(username, password));
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };
  useEffect(() => {
    if (error) Alert.alert(error);
  }, [error]);

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
            <Text style={styles.inputText}>Email:</Text>
            <Input placeholder="" value={username} onChangeText={setUsername} />
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
        </View>

        <Button onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>

        <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
          <Text style={styles.signUpText}>Don't you have an account?</Text>
          <Text style={styles.signUpFocus}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
