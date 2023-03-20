import {StyleSheet} from 'react-native';
import Colors from '../../utilities/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-start',
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
  profileContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  dateContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    //paddingHorizontal: 40,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'red',
  },
});
