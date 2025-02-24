import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  searchArea: {
    
    backgroundColor: '#F3F5F7',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  searchAreaInput: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
    padding: 10,
    
  },
  scrollView: {
   
    
  },
  titleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 35,
    marginTop: 20,
    
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


