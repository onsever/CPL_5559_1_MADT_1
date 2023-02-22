import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';
import ReviewCard from '../../components/ReviewCard';
import {SafeAreaView} from 'react-native-safe-area-context';

type ReadReviewsScreenProps = NativeStackScreenProps<
  HomeStackNavigatorProps,
  'ReadReviews'
>;
export default function ReadReviewsScreen({
  navigation,
  route,
}: ReadReviewsScreenProps) {
  const movie = route.params.movie;

  console.log(movie);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Read Reviews',
    });
  }, [navigation]);

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
          <ReviewCard
            image={require('../../../assets/profile.png')}
            title="Daniel Miolan"
            description="Great movie! I highly suggest it! "
          />

          <ReviewCard
            image={require('../../../assets/profile.png')}
            title="Sandeep Kaur"
            description={'I would not recommend it. '}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
