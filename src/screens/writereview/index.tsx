import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackNavigatorProps} from '../../navigators/HomeStackNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {supabase, SUPBASE_STORAGE_URL} from '../../utilities/Supabase';
import Colors from '../../utilities/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {addMovieReview} from '../../store/review/reviewActions';
import {getSessionInfoFromLocal} from '../../helpers/common';
import {getSingleUserProfile} from '../../store/userProfile/userProfileActions';

type WriteReviewScreenProps = NativeStackScreenProps<
  HomeStackNavigatorProps,
  'WriteReview'
>;
export default function WriteReviewScreen({
  navigation,
  route,
}: WriteReviewScreenProps) {
  const [review, setReview] = React.useState(null);
  const [reviewError, setReviewError] = useState('');

  const movie = route.params.movie;
  const dispatch = useDispatch();
  const {selectedUserProfile} = useSelector(state => state.userProfileReducer);

  useEffect(() => {
    const checkSession = async () => {
      let session = await getSessionInfoFromLocal();
      if (session) {
        dispatch(getSingleUserProfile(session.user.id));
      }
    };
    checkSession();
  });

  const handleSubmit = () => {
    var reviewValid = false;
    if (review.length === 0 ) {
      setReviewError("Review is required");
    } else {
      setReviewError('');
      reviewValid = true;
    }
    if (reviewValid) {
      dispatch(
        addMovieReview({
          review: review,
          movie_id: movie.id,
          user_id: selectedUserProfile.id,
          profiles: {
            first_name: selectedUserProfile.first_name,
            image: selectedUserProfile.image,
            last_name: selectedUserProfile.last_name,
          },
        }),
      );
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={{uri: movie.image}} style={styles.image} />
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.description}>
          Release date: {movie.release_date}
        </Text>

        <View style={styles.reviewContainer}>
          <TextInput
            editable
            multiline
            numberOfLines={6}
            style={[styles.review]}
            value={review}
            onChangeText={a => setReview(a)}
          />
          {reviewError.length > 0 && (
              <Text style={styles.errorText}>{reviewError}</Text>
            )}
          <View
            style={{
              alignItems: 'center',
            }}>
            <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
