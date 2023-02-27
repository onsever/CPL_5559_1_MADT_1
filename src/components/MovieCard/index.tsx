import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

/*
interface MovieCardProps {
  movie: Movie;
  setSelectedMovie:Movie;
}
*/
const MovieCard = ({movie,setSelectedMovie})=> {
  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity onPress={() => {setSelectedMovie(movie) }}>
        <Image
          source={{uri: movie.image}}
          style={{
            resizeMode: 'contain',
            height: 250,
            width: '100%',
          }}
        />
        <Text style={styles.titleText}>{movie.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
