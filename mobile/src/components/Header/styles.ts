import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    padding: width < 768 ? 15 : 25, // Adjust padding based on device width
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    
  },
  headerTitle: {
    color: theme.colors.btnTextColor,
    fontSize: width < 768 ? 20 : 24, // Adjust font size based on device width
    fontFamily: theme.fontsRoboto.Bold,
  },
  iconAction: {
    width: width < 768 ? 25 : 31, // Adjust icon size based on device width
    height: width < 768 ? 23 : 29, // Adjust icon size based on device width
  }
});

export default styles; 