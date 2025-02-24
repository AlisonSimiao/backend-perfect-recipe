import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#F3F5F7',
    borderRadius: 10,
    marginBottom: 40,
    height: 210,
    width: 170,
    marginTop: 21,
    
  },
  contentImage: {
   
    width: 170,
    height: 78,
  },
  image: {
    width: 170,
    height: 148,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  title: {
    fontSize: 20,
    fontFamily: theme.fontsRoboto.Bold,
    color: theme.colors.cardTextColor,
    marginTop: 8,
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    color: theme.colors.cardTextColor,
    marginTop: 4,
    textAlign: 'center',
  }
});
