import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Raleway_700Bold } from '@expo-google-fonts/raleway';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { theme } from './src/global/theme';
import { useEffect, useState } from 'react';
import { SplashScreen } from './src/components/splashscreen';
import Home from './src/screens/AuthScreens/ReceitaScreen';
import Signin from './src/screens/Intro';
import SignInScreen from './src/screens/Intro';
import Signin1 from './src/screens/signin1';
import Routes from './src/router';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [fontsLoaded, error] = useFonts({
    Raleway_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {

    if (fontsLoaded) {
      setTimeout(() => {
        setIsLoading(true);
      }, 3000);
    }
  }, [error, fontsLoaded]);

  if (!isLoading) {
    return <SplashScreen />
  }


  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <Routes />
      <StatusBar style="light" />
    </View>
  );
}

