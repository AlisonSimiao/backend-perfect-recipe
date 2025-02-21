import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/theme";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 65,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.btnBackground,
  },
  btnText: {
    textAlign: 'center',
    width: '80%',
    fontSize: width * 0.06,
    fontFamily: theme.fontsRaleway.Bold,
    textTransform: 'uppercase',
    color: theme.colors.btnTextColor,
  },
  btnCreateAccount: {
    width: '90%',
    height: 65,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderColor: theme.colors.btnBackground,
  },
  btnTextCreateAccount: {
    color: theme.colors.btnTextColorBlack,
    fontSize: 24,
    fontFamily: theme.fontsRaleway.Bold,
    textTransform: 'uppercase',
  }
});

export default styles;