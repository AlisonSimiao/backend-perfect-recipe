import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.btnTextColorBlack,
    justifyContent: 'space-between',
    width: '100%',
    height: 516,


  },

  form: {
    padding: 25,
    gap: 10,
    backgroundColor: theme.colors.primary,
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-between',
  },
  formContent: {
    gap: 10,
  },
  formTitle: {
    color: theme.colors.btnTextColorBlack,
    fontSize: 18,
    fontFamily: theme.fontsRoboto.Regular,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 86
  },

  forgotPassword: {
    color: theme.colors.btnBackground,
    fontSize: 20,
    fontFamily: theme.fontsRaleway.Bold,
    textAlign: 'left',
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 79,
    borderRadius: 50,
    marginBottom: 50,
  },

});

export default styles;
