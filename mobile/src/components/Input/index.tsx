import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { theme } from '../../global/theme';

interface InputProps extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  icon?: boolean;
  search?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, icon = false, search, secureTextEntry, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? !showPassword : false}
        style={styles.input} // Use a style from the styles object
        {...rest}
      />
      {
        secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={styles.iconButton}>
            <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="black" />
          </TouchableOpacity>
        )
      }
      {search && (
        <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={styles.iconButton}>
          {search && <MaterialIcons name='search' size={24} color={theme.colors.cardTextColor} />}
         
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;