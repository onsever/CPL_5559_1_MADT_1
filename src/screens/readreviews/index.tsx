import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';
import ReviewCard from '../../components/ReviewCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {supabase, SUPBASE_STORAGE_URL} from '../../utilities/Supabase';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieReviews} from '../../store/review/reviewActions';
import {ScrollView} from 'react-native-gesture-handler';

type ReadReviewsScreenProps = NativeStackScreenProps<
  HomeStackNavigatorProps,
  'ReadReviews'
>;
export default function ReadReviewsScreen({
  navigation,
  route,
}: ReadReviewsScreenProps) {
  const movie = route.params.movie;

  const {reviews} = useSelector(state => state.reviewReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieReviews(movie.id));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{uri: movie.image}} style={styles.image} />
          <Text style={styles.title}>{movie.name}</Text>
          <Text style={styles.description}>
            Release date: {movie.release_date}
          </Text>

          <View style={styles.reviewsContainer}>
            <Text style={styles.reviewsTitle}>Reviews</Text>
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                image={{
                  uri:
                    SUPBASE_STORAGE_URL + '/profile/' + review.profiles.image,
                }}
                title={
                  review.profiles.first_name + ' ' + review.profiles.last_name
                }
                description={review.review}
              />
            ))}
          </View>
          <View style={styles.reviewsContainer}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() =>
                  navigation.navigate('Write Review', {movie: movie})
                }>
                <Text style={styles.buttonText}>Write Review</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
