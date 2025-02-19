import { createNativeStackNavigator } from '@react-navigation/native-stack';


import IntroScreen from '../../screens/Intro';
import SignInScreen from '../../screens/SignIn';

const Stack = createNativeStackNavigator();

export function MainStacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />

    </Stack.Navigator>
  );
}
