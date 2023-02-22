import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './styles';
import MovieCard from '../../components/MovieCard';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';

type HomeScreenProps = NativeStackScreenProps<HomeStackNavigatorProps, 'Home'>;

export type Movie = {
  id: number;
  name: string;
  image: any;
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const movies: Movie[] = [
    {
      id: 1,
      name: 'Avengers',
      image: require('../../../assets/movie-images/avengers.jpg'),
    },

    {
      id: 2,
      name: 'Guardians of the Galaxy',
      image: require('../../../assets/movie-images/guardians.jpg'),
    },
    {
      id: 3,
      name: 'Black Adam',
      image: require('../../../assets/movie-images/black-adam.jpg'),
    },
  ];

  const handleReadReviews = (movie: Movie) => {
    navigation.navigate('ReadReviews', {movie});
  };

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Please select a video to view</Text>
          </View>

          <View style={styles.movieContainer}>
            <FlatList
              data={movies}
              // @ts-ignore
              keyExtractor={item => item.id}
              renderItem={({item}) => <MovieCard movie={item} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Trailer</Text>
          </View>

          <View style={styles.trailerContainer}></View>

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
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => handleReadReviews(movies[0])}>
              <Text style={styles.buttonText}>Reviews</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
