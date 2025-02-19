import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, type TextInputProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';


interface InputProps extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  icon?: boolean;
}

export default function Input({ placeholder, icon = false, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        style={{ flex: 1 }}
        {...rest}
      />
      {icon && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}