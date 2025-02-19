import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({

  background: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    gap: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 150,
  },
  logo: {
    width: 191,
    height: 160,
  },
  title: {
    color: theme.colors.btnTextColor,
    fontSize: 28,
    fontFamily: theme.fontsRoboto.Regular,
    textAlign: 'center',
    width: 296,
    height: 100,
  },
  btnsArea: {
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: Platform.OS === 'ios' ? 290 : 478,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,

    position: 'absolute',
    bottom: 0,
    padding: 30,
  },
  btnSignIn: {
    width: '100%',
    height: 56,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.btnBackground,
  },
  footer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? -15 : 40,
    padding: 30,
  },
  footerText: {
    color: theme.colors.btnBackground,
    fontSize: 24,
    fontFamily: theme.fontsRaleway.Bold,
  }

});
