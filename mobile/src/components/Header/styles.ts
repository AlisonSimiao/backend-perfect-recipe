import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.primary,
    paddingTop: 20,
    paddingBottom: 10,
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: theme.colors.btnTextColor,
    marginLeft: 10,
  },
});

export default styles; 