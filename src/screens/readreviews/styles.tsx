import {StyleSheet} from 'react-native';
import Colors from '../../utilities/Colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    width: '45%',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.lightGray,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: -1,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.primary,
  },

});
