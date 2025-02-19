import { Dimensions, Platform, StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 20,

  },
  background: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    gap: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Platform.OS === 'ios' ? height * 0.08 : height * 0.2,
  },
  logo: {
    width: width * 0.75,
    height: height * 0.18,
    resizeMode: 'contain',
  },
  title: {
    color: theme.colors.btnTextColor,
    fontSize: width * 0.06,
    fontFamily: theme.fontsRoboto.Regular,
    textAlign: 'center',
    width: width * 0.85,
    height: height * 0.09,
  },
  btnsArea: {
    gap: height * 0.015,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: Platform.OS === 'ios' ? height * 0.50 : height * 0.4,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    position: 'absolute',
    bottom: 0,
    padding: width * 0.07,
  },
  btnSignIn: {
    width: '90%',
    height: height * 0.08,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.btnBackground,
  },
  footer: {
    position: 'absolute',
    bottom: height * 0.03,
    padding: width * 0.07,
  },
  footerText: {
    color: theme.colors.btnBackground,
    fontSize: width * 0.045,
    fontFamily: theme.fontsRaleway.Bold,
    textDecorationLine: 'underline',
  }

});
