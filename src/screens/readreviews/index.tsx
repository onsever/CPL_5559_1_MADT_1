import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';
import ReviewCard from '../../components/ReviewCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {supabase,SUPBASE_STORAGE_URL} from '../../utilities/Supabase';

type ReadReviewsScreenProps = NativeStackScreenProps<
  HomeStackNavigatorProps,
  'ReadReviews'
>;
export default function ReadReviewsScreen({
  navigation,
  route,
}: ReadReviewsScreenProps) {
  const [reviews, setReviews] = React.useState<any[]>([]);
  const movie = route.params.movie;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Read Reviews',
    });
  }, [navigation]);

  React.useEffect(() => {
    const fetchData = async () => {
      const {data: reviewData, error: reviewError} = await supabase
        .from('reviews')
        .select(`review, profiles (first_name, last_name, image) `)
        .eq('movie_id', movie.id);

      if (reviewError) {
        console.log('error', reviewError);
        return;
      }

      setReviews(reviewData);
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source= {{uri:movie.image}}
          style={styles.image}
        />
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.description}>Release date: {movie.release_date}</Text>

        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewsTitle}>Reviews</Text>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              image= {{uri:SUPBASE_STORAGE_URL + '/profile/' + review.profiles.image}}
              title={review.profiles.first_name + ' ' + review.profiles.last_name}
              description={review.review}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
