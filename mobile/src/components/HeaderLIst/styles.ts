import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title: {  
    fontSize: 20,
    fontWeight: 'bold',
    color: '#66324B',
  },
  link: {
    color: theme.colors.btnBackground,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  }
});
