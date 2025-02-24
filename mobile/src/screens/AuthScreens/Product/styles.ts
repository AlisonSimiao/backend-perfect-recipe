import { StyleSheet } from "react-native";
import { theme } from "../../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    containerImage: {
     backgroundColor: 'red',
     width: '100%',
     height: 286,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    containerTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 100,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: theme.fontsRoboto.Bold,
      color: theme.colors.cardTextColor,
    },
    containerDescription: {
      paddingHorizontal: 35,
      paddingTop: 20,
      justifyContent: 'space-between',
      height: '35%',
      
    },
    description: {
      fontSize: 16,
    },
    containerButton: {
      width: '100%',
      paddingHorizontal: 35,
      paddingTop: 20,
      height: '35%',    
      
      alignItems: 'center',
    },
    button: {
    },
});


export default styles;
