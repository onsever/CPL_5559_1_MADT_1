import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

interface MovieCardProps extends TouchableOpacityProps {
  movie: React.ReactNode | React.ReactNode[];
}

const MovieCard: React.FC<MovieCard> = props => {
  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={props.movie.image}
          style={{
            resizeMode: 'contain',
            height: 250,
            width: '100%',
          }}
        />
        <Text style={styles.titleText}>{props.movie.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
