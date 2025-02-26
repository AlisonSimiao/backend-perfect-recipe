import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { theme } from '../global/theme';

interface RecipeStepProps {
  title: string;
  inputs: { placeholder: string }[];
}

const RecipeStep: React.FC<RecipeStepProps> = ({ title, inputs }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          placeholder={input.placeholder}
          placeholderTextColor={theme.colors.cardTextColor}
          style={styles.input}
          keyboardType="numeric" // Para permitir apenas números
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10, // Added padding for better spacing on small screens
  },
  title: {
    fontSize: 16, // Reduced font size for better fit on small screens
    fontWeight: 'bold',
    marginBottom: 8, // Reduced margin for a more compact layout
  },
  input: {
    padding: 15, // Reduced padding for better fit on small screens
    marginBottom: 8, // Reduced margin for a more compact layout
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 10, // Slightly reduced border radius for a tighter look
    color: theme.colors.btnTextColorBlack,
    fontFamily: theme.fontsRoboto.Regular,
    fontSize: 18, // Reduced font size for better fit on small screens
  },
});

export default RecipeStep; 