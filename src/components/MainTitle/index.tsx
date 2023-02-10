import {Text} from 'react-native';
import React from 'react';
import {TextProps} from 'react-native';
import {styles} from './styles';

interface MainTitleProps extends TextProps {
  title: string;
  color?: string;
  fontSize?: number;
}

const MainTitle: React.FC<MainTitleProps> = props => {
  return (
    <Text
      {...props}
      style={[styles.title, {color: props.color, fontSize: props.fontSize}]}>
      {props.title}
    </Text>
  );
};

export default MainTitle;
