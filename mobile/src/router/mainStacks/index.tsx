import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import IntroScreen from '../../screens/Intro';
import SignInScreen from '../../screens/SignIn';
import CreateAccountsScreen from '../../screens/CreateAccounts';
import ForgotPasswordScreen from '../../screens/Forgot-Password';
import HomeScreen from '../../screens/AuthScreens/Home';
import ProductScreen from '../../screens/AuthScreens/Product';
import CodeOtpScreen from '../../screens/Code-Otp';
import ReceitaScreen from '../../screens/AuthScreens/ReceitaScreen';
import PrepareScreen from '../../screens/AuthScreens/Prepare';

export enum ERoutes {
  Intro = 'Intro',
  SignIn = 'SignIn',
  CreateAccounts = 'CreateAccounts',
  ForgotPassword = 'ForgotPassword',
  ReceitaScreen = 'ReceitaScreen',
  Product = 'Product',
  CodeOtp = 'CodeOtp',
  Home = 'Home',
  Prepare = 'Prepare',
}
export type RootStackParamList = {
  [ERoutes.Intro]: undefined;
  [ERoutes.SignIn]: undefined;
  [ERoutes.CreateAccounts]: undefined;
  [ERoutes.ForgotPassword]: undefined;
  [ERoutes.CodeOtp]: undefined;
  [ERoutes.Prepare]: undefined;
};

const Stack = createNativeStackNavigator();

export function MainStacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      {/* Public Routes */}
      <Stack.Screen name={ERoutes.Intro} component={IntroScreen} />
      <Stack.Screen name={ERoutes.SignIn} component={SignInScreen} />
      <Stack.Screen name={ERoutes.CreateAccounts} component={CreateAccountsScreen} />
      <Stack.Screen name={ERoutes.ForgotPassword} component={ForgotPasswordScreen} />
      <Stack.Screen name={ERoutes.CodeOtp} component={CodeOtpScreen} />
      <Stack.Screen name={ERoutes.Home} component={HomeScreen} />
      <Stack.Screen name={ERoutes.Product} component={ProductScreen} />
      <Stack.Screen name={ERoutes.ReceitaScreen} component={ReceitaScreen} />
      <Stack.Screen name={ERoutes.Prepare} component={PrepareScreen} />



    </Stack.Navigator>
  );
}
