import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/theme";

const DIMENSIONS = Dimensions.get('window');

export const sheet_height = 220;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20, // Increased padding for better spacing
      backgroundColor: theme.colors.primary, // Changed to theme color for consistency
    },
    contentContainer: {
      flex: 1,
      paddingBottom: 30, // Increased padding for better touch area
      paddingHorizontal: 20, // Added horizontal padding for better layout
    },
    title: {
      fontSize: 30, // Increased font size for better visibility
      fontWeight: 'bold', // Changed to 'bold' for consistency
      marginBottom: 16, // Increased margin for better spacing
      color: theme.colors.btnBackground, // Changed to theme color for consistency
    },
    subtitle: {
      fontSize: 22, // Increased font size for better visibility
      fontWeight: '600',
      marginBottom: 16,
      color: theme.colors.btnBackground, // Changed to theme color for consistency
    },
    optionButton: {
      backgroundColor: theme.colors.cardBackground, // Changed to theme color for consistency
      padding: 18, // Increased padding for a larger touch area
      borderRadius: 10, // Adjusted border radius for a softer look
      marginBottom: 16, // Increased margin for better spacing
      borderWidth: 1,
      borderColor: theme.colors.btnBackground, // Changed to theme color for consistency
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2, // Increased shadow opacity for more depth
      shadowRadius: 8,
      elevation: 4, // Increased elevation for better visibility on Android
    },
    optionText: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.colors.btnBackground, // Changed to theme color for consistency
    },
    optionTextBold: {
      fontSize: 18,
      fontWeight: 'bold', // Changed to 'bold' for consistency
      color: theme.colors.btnBackground, // Changed to theme color for consistency
    },
    applyButton: {
      backgroundColor: theme.colors.primary, // Changed to theme color for consistency
      padding: 18, // Increased padding for a larger touch area
      borderRadius: 10, // Adjusted border radius
      marginTop: 30, // Increased margin for better spacing
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3, // Increased shadow opacity for more depth
      shadowRadius: 8,
      elevation: 4,
    },
    applyButtonText: {
      color: theme.colors.btnTextColor, // Changed to theme color for consistency
      textAlign: 'center',
      fontSize: 20, // Increased font size for better visibility
      fontWeight: '600',
    },
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16, // Increased margin for better spacing
    },
    radioButton: {
      width: 30, // Increased size for better touch target
      height: 30,
      borderRadius: 15,
 // Changed to theme color for consistency
      marginRight: 16, // Increased margin for better spacing
    },
    radioInner: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.colors.primary, // Changed to theme color for consistency
    },
    favoritesContainer: {
      marginTop: 20, // Increased margin for better spacing
    },
    favoritesText: {
      fontSize: 18, // Increased font size for better visibility
      fontWeight: '500',
      color: theme.colors.btnBackground, // Changed to theme color for consistency
      marginRight: 12, // Increased margin for better spacing
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 20, // Increased margin for better spacing
    },
});
