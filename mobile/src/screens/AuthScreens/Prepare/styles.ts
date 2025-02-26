import { StyleSheet, Dimensions, Platform } from "react-native";
import { theme } from "../../../global/theme";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.colors.primary, // Added background color for better contrast
    },
    headerContainer: {
        flexDirection: 'row',
        gap: width < 320 ? 12 : 20, // Reduced gap for a more compact layout
        alignItems: 'center',
        justifyContent: 'space-evenly', // Changed to space-between for better distribution
        backgroundColor: theme.colors.cardBackground,
        height: width < 320 ? 90 : (Platform.OS === 'ios' ? 110 : 102), // Adjusted height for better fit
        paddingHorizontal: width < 320 ? 15 : 20, // Adjusted padding for smaller screens
        paddingTop: width < 320 ? 8 : (Platform.OS === 'ios' ? 18 : 15), // Adjusted top padding for better spacing
        paddingBottom: width < 320 ? 15 : 30, // Adjusted bottom padding for better spacing
    },
    headerContainerTitle: {
        flexDirection: 'row',
        gap: width < 320 ? 6 : 12, // Reduced gap for a more compact layout
    },
    image: {
        width: width < 320 ? 45 : 55, // Adjusted image size for better fit
        height: width < 320 ? 45 : 55, // Adjusted image size for better fit
        borderRadius: 100,
    },
    titleContainer: {
        flexDirection: 'column',
        gap: 6, // Reduced gap for a more compact layout
    },
    title: {
        fontFamily: theme.fontsRoboto.Regular,
        fontSize: width < 320 ? 16 : 18, // Adjusted font size for better readability
        color: theme.colors.cardTextColor,
    },
    quantity: {
        fontFamily: theme.fontsRoboto.Regular,
        fontSize: width < 320 ? 12 : 14, // Adjusted font size for better readability
        color: theme.colors.cardTextColor,
        textAlign: 'center',
    },
    quantityText: {
        fontFamily: theme.fontsRoboto.Bold,
        fontSize: width < 320 ? 12 : 14, // Adjusted font size for better readability
        color: theme.colors.btnBackground,
        textAlign: 'center',
        gap: width < 320 ? 60 : 120, // Adjusted gap for smaller screens
    },
    quantityContainer: {
      flexDirection: 'row',
      gap: 2, // Reduced gap for a more compact layout
      alignItems: 'center',
      justifyContent: 'center',
    },
    sheetContainer: {
        height: 250, // Increased height for better layout when keyboard is open
        backgroundColor: theme.colors.primary, // Changed to a theme color for consistency
        width: width,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20, // Added padding to prevent content from being cut off
    },
    sheetContentTitle: {
        fontFamily: theme.fontsRoboto.Bold,
        fontSize: 20, // Increased font size for better visibility
        color: theme.colors.cardTextColor,
        marginBottom: 15, // Increased margin for better spacing
    },
    sheetInputsArea: {
        flex: 1,
        paddingHorizontal: 20, // Adjusted padding for better fit
       
    },
    sheetInputsAreaText: {
        fontFamily: theme.fontsRoboto.Regular,
        fontSize: 18, // Increased font size for better readability
        color: theme.colors.cardTextColor,
        marginBottom: 30, // Adjusted margin for better spacing
    },
    sheetInputOptionText: {
        fontFamily: theme.fontsRoboto.Regular,
        fontSize: 18, // Increased font size for better readability
        color: theme.colors.cardTextColor,
    },
    sheetInputContainer: {
        flexDirection: 'row',
        gap: 12, // Increased gap for better layout
        marginBottom: 30, // Adjusted margin for better spacing
    },
    sheetInputOption: {
        padding: 14, // Increased padding for better touch targets
        borderRadius: 10,
        backgroundColor: theme.colors.cardBackground, // Added background color for better visibility
    },
    sheetInputArea: {
        flexDirection: 'column',
    },
    sheetInputAreaText: {
        fontFamily: theme.fontsRoboto.Bold,
        fontSize: 18, // Increased font size for better readability
        color: theme.colors.cardTextColor,
        marginTop: 0,
        marginBottom: 12, // Adjusted margin for better spacing
    },
    InputSheetArea: {
        flexDirection: 'column',
        gap: 12, // Increased gap for better layout
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 25
    },
    ingredientsContainer: {
       
    },
    ingredientsTitleContainer: {
        flexDirection: 'row',
        gap: 12, // Increased gap for better layout
        alignItems: 'center',
        justifyContent: 'center',
    },
    ingredientsTitle: {
        fontFamily: theme.fontsRoboto.Bold,
        fontSize: 18, // Increased font size for better readability
        color: theme.colors.cardTextColor,
    },
    ingredientsTitleText: {
        fontFamily: theme.fontsRoboto.Regular,
        fontSize: 18, // Increased font size for better readability
        color: theme.colors.cardTextColor,
    },
    EtapasContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.colors.cardBackground,
        marginTop: 10,
    },
    EtapasContainerButtonArea: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    EtapasContainerTitleText: {
        fontFamily: theme.fontsRoboto.Bold,
        fontSize: 18, // Increased font size for better readability
        color: theme.colors.cardTextColor,
    }
})
