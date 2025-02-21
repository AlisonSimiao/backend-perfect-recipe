import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  headerTitle: {
    color: theme.colors.btnTextColor,
    fontSize: 24,
    fontFamily: theme.fontsRoboto.Bold,
  },
});

export default styles; 