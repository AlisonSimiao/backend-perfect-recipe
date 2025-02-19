import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  btnLogin: {
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 370,
    height: 79,
    backgroundColor: theme.colors.btnBackground,
    color: theme.colors.btnTextColor
  },
  btnCreateAccount: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderColor: theme.colors.btnBackground,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 79,
  },
  buttonText: {
    fontSize: 18,

    color: theme.colors.btnTextColorBlack,
    fontFamily: theme.fontsRaleway.Bold
  },
  buttonTextBlack: {
    textTransform: 'uppercase',
    color: theme.colors.btnTextColor,
    fontSize: 18,
    fontFamily: theme.fontsRaleway.Bold

  }
});

export default styles;