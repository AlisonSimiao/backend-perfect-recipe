import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16, // Increased margin for better spacing
    gap: 16,
    paddingLeft: 15,
  },
  radioButton: {
    width: 24, // Increased size for better touch target
    height: 24, // Increased size for better touch target
    borderRadius: 12, // Adjusted for a more circular appearance
    borderWidth: 2, // Thicker border for better visibility
    borderColor: '#555', // Softer border color for a modern look
    marginRight: 12, // Increased margin for better spacing
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 14, // Adjusted size for better alignment
    height: 14, // Adjusted size for better alignment
    borderRadius: 7, // Adjusted for a more circular appearance
    backgroundColor: theme.colors.btnBackground, // Softer inner color for a modern look
  },
});
