import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 120, // Adjusted height for better visibility
    borderRadius: 20, // Changed to a less rounded border
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8, // Added margin for spacing
    backgroundColor: theme.colors.cardBackground,
    padding: 20,
    borderRadius: 100,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30, // Adjusted for a circular image
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.cardTextColor, // Updated to use theme color
    textAlign: 'center',
  },
});
