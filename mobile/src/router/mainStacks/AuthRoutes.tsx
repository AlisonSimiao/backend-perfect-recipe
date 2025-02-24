import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/AuthScreens/Home';
import ProductScreen from '../../screens/AuthScreens/Product';
import PrepareScreen from '../../screens/AuthScreens/Prepare';  

export type AuthStackParamList = {
  Home: undefined;
  Product: undefined;
  Prepare: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Prepare" component={PrepareScreen} />
    </Stack.Navigator>
  );
}
