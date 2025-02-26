import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/theme";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sheetContainer: {
    height: 250,
    backgroundColor: theme.colors.primary,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,
  },
  sheetContentTitle: {
    fontFamily: theme.fontsRoboto.Bold,
    fontSize: 20,
    color: theme.colors.cardTextColor,
    marginBottom: 15,
  },
  sheetInputsArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sheetInputsAreaText: {
    fontFamily: theme.fontsRoboto.Regular,
    fontSize: 18,
    color: theme.colors.cardTextColor,
    marginBottom: 30,
  },
  sheetInputOptionText: {
    fontFamily: theme.fontsRoboto.Regular,
    fontSize: 18,
    color: theme.colors.cardTextColor,
  },
  sheetInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Changed from gap to justifyContent for better layout
    marginBottom: 30,
  },
  sheetInputOption: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: theme.colors.cardBackground,
  },
  sheetInputArea: {
    flexDirection: 'column',
  },
  sheetInputAreaText: {
    fontFamily: theme.fontsRoboto.Bold,
    fontSize: 18,
    color: theme.colors.cardTextColor,
    marginTop: 0,
    marginBottom: 12,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
});
