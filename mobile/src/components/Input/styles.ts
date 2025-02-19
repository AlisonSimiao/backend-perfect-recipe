import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#f3f5f7'

  },
  headerTitle: {
    color: theme.colors.btnTextColor,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default styles;
