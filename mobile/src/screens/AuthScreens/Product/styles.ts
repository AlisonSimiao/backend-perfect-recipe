import { StyleSheet, Dimensions, Platform } from "react-native";
import { theme } from "../../../global/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    backgroundColor: 'red',
    width: '100%',
    height: 285, // Adjust height for better appearance on smaller screens like iPhone SE
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 15, // Further reduced padding for smaller screens
    marginTop: 20,
  },
  title: {
    fontSize: width > 440 ? 20 : 18, // Adjust font size for better readability on smaller screens
    fontWeight: 'bold',
    fontFamily: theme.fontsRoboto.Bold,
    color: theme.colors.cardTextColor,
  },
  containerDescription: {
    paddingHorizontal: 15, // Further reduced padding for smaller screens
    paddingTop: 15,
    justifyContent: 'space-between',
    height: '25%', // Adjusted height for better appearance on smaller screens
  },
  description: {
    fontSize: width > 400 ? 15 : 12, // Adjust font size for better readability on smaller screens
  },
  containerButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 50,
    width: '100%',
    alignItems: 'center',
  },
  button: {
  },
});

export default styles;
