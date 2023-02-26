import {StyleSheet} from 'react-native';
import Colors from '../../utilities/Colors';

export const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  image: {
    height: 150,
    borderRadius: 10,
  },
  trailer: {
    height: 200,
    borderRadius: 10,
  },
  titleContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
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
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 20,
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
  movieContainer: {
    paddingTop: 10,
  },
  trailerContainer: {
    height: 200,
    backgroundColor: Colors.lightGray,
    margin: 10,
  },
});
