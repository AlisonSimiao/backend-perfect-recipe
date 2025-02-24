import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderRadius: 10,
   
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f5f7'

  },
  headerTitle: {
    color: theme.colors.btnTextColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f3f5f7',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    width: '100%',
  }
});

export default styles;
