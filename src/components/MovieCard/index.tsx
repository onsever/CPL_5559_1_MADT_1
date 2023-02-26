import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import Movie from '../../models/Movie';
import Video from 'react-native-video';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = props => {
  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={{uri: props.movie.image}}
          style={styles.image}
          resizeMode={'contain'}
        />
        <Text style={styles.titleText}>{props.movie.name}</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Trailer</Text>
      </View>

      <View style={styles.trailerContainer}>
        <Video
          source={{uri: props.movie.trailer}}
          style={styles.trailer}
          resizeMode={'contain'}
          controls={true}
          playInBackground={false}
          playWhenInactive={false}
          paused={true}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Cast & Crew</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Synopsis</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Reviews</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieCard;
