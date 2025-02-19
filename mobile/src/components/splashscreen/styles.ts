import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.btnTextColorBlack,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    height: '100%',
  },
});

export default styles;
