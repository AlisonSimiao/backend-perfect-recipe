import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { theme } from '../../global/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  createAccount?: boolean;

}

const Button: React.FC<ButtonProps> = ({ title, onPress, createAccount = false, ...rest }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={createAccount ? styles.btnCreateAccount : styles.btn}
      {...rest}
    >
      <Text style={createAccount ? styles.btnTextCreateAccount : styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
