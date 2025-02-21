import { createNativeStackNavigator } from '@react-navigation/native-stack';


import IntroScreen from '../../screens/Intro';
import SignInScreen from '../../screens/SignIn';
import CreateAccountsScreen from '../../screens/CreateAccounts';
import ForgotPasswordScreen from '../../screens/Forgot-Password';
import HomeScreen from '../../screens/AuthScreens/Home';
import ProductScreen from '../../screens/AuthScreens/Product';


export enum ERoutes {
  Intro = 'Intro',
  SignIn = 'SignIn',
  CreateAccounts = 'CreateAccounts',
  ForgotPassword = 'ForgotPassword',
  Home = 'Home',
  Product = 'Product',
}

const Stack = createNativeStackNavigator();

export function MainStacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ERoutes.Product}>
      <Stack.Screen name={ERoutes.Intro} component={IntroScreen} />
      <Stack.Screen name={ERoutes.SignIn} component={SignInScreen} />
      <Stack.Screen name={ERoutes.CreateAccounts} component={CreateAccountsScreen} />
      <Stack.Screen name={ERoutes.ForgotPassword} component={ForgotPasswordScreen} />
      <Stack.Screen name={ERoutes.Product} component={ProductScreen} />


      <Stack.Screen name={ERoutes.Home} component={HomeScreen} />

    </Stack.Navigator>
  );
}
