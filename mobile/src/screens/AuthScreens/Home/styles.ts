import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchArea: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchAreaInput: {  
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  sectionContainer: {
    marginBottom: 25,
  },
  listContainer: {
    marginTop: 10,
  },
  categoriesContainer: {
    marginTop: 10,
    paddingBottom: 20,
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

