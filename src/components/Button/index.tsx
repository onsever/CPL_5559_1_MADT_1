import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Colors from '../../utilities/Colors';

interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  children: React.ReactNode | React.ReactNode[];
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        {backgroundColor: props.color || Colors.lightGray},
      ]}
      onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
