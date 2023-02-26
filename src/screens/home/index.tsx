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

type HomeScreenProps = NativeStackScreenProps<HomeStackNavigatorProps, 'Home'>;

const bucketName = 'cpl5559-project';
const folderPath = 'public/movie';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getUserProfiles());
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
    console.log(updatedMovies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
      }}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Please select a video to view</Text>
      </View>

      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
        <FlatList
          data={movies}
          // @ts-ignore
          keyExtractor={item => item.id}
          renderItem={({item}) => <MovieCard movie={item} />}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
          }}
          scrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
