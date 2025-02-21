import { createNativeStackNavigator } from '@react-navigation/native-stack';


import IntroScreen from '../../screens/Intro';
import SignInScreen from '../../screens/SignIn';
import CreateAccountsScreen from '../../screens/CreateAccounts';
import ForgotPasswordScreen from '../../screens/Forgot-Password';
import HomeScreen from '../../screens/AuthScreens/ReceitaScreen';
import ProductScreen from '../../screens/AuthScreens/Product';
import CodeOtpScreen from '../../screens/Code-Otp';
import ReceitaScreen from '../../screens/AuthScreens/ReceitaScreen';


export enum ERoutes {
  Intro = 'Intro',
  SignIn = 'SignIn',
  CreateAccounts = 'CreateAccounts',
  ForgotPassword = 'ForgotPassword',
  ReceitaScreen = 'ReceitaScreen',
  Product = 'Product',
  CodeOtp = 'CodeOtp',
}

const Stack = createNativeStackNavigator();

export function MainStacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ERoutes.Intro} component={IntroScreen} />
      <Stack.Screen name={ERoutes.SignIn} component={SignInScreen} />
      <Stack.Screen name={ERoutes.CreateAccounts} component={CreateAccountsScreen} />
      <Stack.Screen name={ERoutes.ForgotPassword} component={ForgotPasswordScreen} />
      <Stack.Screen name={ERoutes.CodeOtp} component={CodeOtpScreen} />

      <Stack.Screen name={ERoutes.Product} component={ProductScreen} />


      <Stack.Screen name={ERoutes.ReceitaScreen} component={ReceitaScreen} />

    </Stack.Navigator>
  );
}
