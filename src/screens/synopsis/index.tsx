import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const SynopsisScreen = ({navigation, route}) => {
  const movie = route.params.movie;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Synopsis',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.synopsis}>{movie.synopsis}</Text>
    </View>
  );
};

export default SynopsisScreen;
