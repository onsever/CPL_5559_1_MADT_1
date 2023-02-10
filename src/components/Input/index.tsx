import {TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface InputProps extends TextInputProps {
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
      autoCapitalize="none"
      autoCorrect={false}
      autoComplete="off"
      keyboardType="default"
    />
  );
};

export default Input;
