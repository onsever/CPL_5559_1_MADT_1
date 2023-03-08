import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';
import ReviewCard from '../../components/ReviewCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {supabase} from '../../utilities/Supabase';

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
        .select('*')
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
          source={require('../../../assets/movie-images/avengers.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.description}>Release date: May 4, 2012</Text>

        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewsTitle}>Reviews</Text>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              image={require('../../../assets/profile.png')}
              title={review.user_name || 'Anonymous'}
              description={review.review}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
