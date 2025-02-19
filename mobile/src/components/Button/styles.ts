import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 79,

    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.btnBackground,
  },
  btnText: {
    textAlign: 'center',

    width: '50%',
    fontSize: 24,
    fontFamily: theme.fontsRaleway.Bold,
    textTransform: 'uppercase',
    color: theme.colors.btnTextColor,
  },
  btnCreateAccount: {
    width: '100%',
    height: 79,
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