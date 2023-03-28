import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type ReviewCardProps = {
  image: any;
  title: string;
  description: string;
};

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
};

export default ReviewCard;
