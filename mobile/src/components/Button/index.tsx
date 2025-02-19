import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  btnCreateAccount?: boolean;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, btnCreateAccount = false, style }) => {
  return (
    <TouchableOpacity
      style={[btnCreateAccount ? styles.btnCreateAccount : styles.btnLogin, style]}
      onPress={onPress}
    >
      <Text style={btnCreateAccount ? styles.buttonText : styles.buttonTextBlack}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
