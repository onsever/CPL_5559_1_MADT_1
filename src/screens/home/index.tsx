import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './styles';
import MovieCard from '../../components/MovieCard';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';
import {getUserProfiles} from '../../store/userProfile/userProfileActions';
import {useDispatch} from 'react-redux';
import {supabase} from '../../utilities/Supabase';
import Movie from '../../models/Movie';
import Video from 'react-native-video';

type HomeScreenProps = NativeStackScreenProps<HomeStackNavigatorProps, 'Home'>;

const bucketName = 'cpl5559-project';
const folderPath = 'public/movie';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    //dispatch(getUserProfiles());
  });

  const fetchData = async () => {
    const {data: movieData, error: movieError} = await supabase
      .from('movies')
      .select('*');

    if (movieError) {
      console.log('error', movieError);
      return;
    }

    const movieUrls = await Promise.all(
      movieData.map(async movie => {
        const {data: url} = supabase.storage
          .from(bucketName)
          .getPublicUrl(`${folderPath}/${movie.image}`);

        return url;
      }),
    );

    const trailerUrls = await Promise.all(
      movieData.map(async movie => {
        const {data: url} = supabase.storage
          .from(bucketName)
          .getPublicUrl(`${folderPath}/${movie.trailer}`);

        return url;
      }),
    );

    const updatedMovies = movieData.map((movie, index) => {
      return {
        ...movie,
        image: movieUrls[index].publicUrl,
        trailer: trailerUrls[index].publicUrl,
      };
    });

    // @ts-ignore
    setMovies(updatedMovies);
    setSelectedMovie(updatedMovies[0]);
    //console.log(updatedMovies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const playVideo = movie => {
    console.log('Movie ', movie.name);
    console.log('Trailer ', movie.trailer);
    setSelectedMovie(movie);
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
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <MovieCard movie={item} setSelectedMovie={playVideo} />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Trailer</Text>
          </View>

          <View style={styles.trailerContainer}>
            {selectedMovie && (
              <Video
                key={selectedMovie?.name}
                ref={ref => {
                  this.player = ref;
                }}
                source={{uri: selectedMovie?.trailer}}
                style={styles.backgroundVideo}
                resizeMode={'contain'}
                controls={true}
                playInBackground={false}
                playWhenInactive={false}
                paused={true}
              />
            )}
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                navigation.navigate('CastAndCrew', {movie: selectedMovie});
              }}>
              <Text style={styles.buttonText}>Cast & Crew</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                navigation.navigate('Synopsis', {movie: selectedMovie});
              }}>
              <Text style={styles.buttonText}>Synopsis</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() =>
                navigation.navigate('Read Reviews', {movie: selectedMovie})
              }>
              <Text style={styles.buttonText}>Reviews</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
