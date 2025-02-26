import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Option {
  title: string;
  inputs: { placeholder: string }[];
}

interface DropDownProps {
  options: Option[];
  onSelect: (option: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ options, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => onSelect(option.title)}>
          <Text style={styles.optionText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  optionText: {
    padding: 10,
    fontSize: 16,
  },
});

export default DropDown;