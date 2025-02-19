import { StyleSheet } from "react-native";
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
    top: 100,
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
    height: 478,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,

    position: 'absolute',
    bottom: 0,
  }
});
