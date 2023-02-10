import {TextInput, ViewProps} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface InputProps extends ViewProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = props => {
  return (
    <TextInput
      {...props}
      style={styles.container}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

export default Input;
