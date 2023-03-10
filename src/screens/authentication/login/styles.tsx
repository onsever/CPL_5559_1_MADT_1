import {StyleSheet} from 'react-native';
import Colors from '../../../utilities/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  signUpButton: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.primary,
    marginRight: 5,
  },
  signUpFocus: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.purple,
  },
});
