import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import FundoImg from '../../assets/img/Image.png';
import LogoImg from '../../assets/img/logo.png';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Button from '../../components/Button';


export default function IntroScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('SignIn' as never);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ImageBackground source={FundoImg} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={LogoImg} style={styles.logo} />
        <Text style={styles.title}>Receitas perfeitas. Em qualquer quantidade.</Text>
      </View>
      <View style={styles.btnsArea}>
        <Button title="Entrar" onPress={handleLogin} />
        <Button title="Criar conta" onPress={handleLogin} createAccount />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
          <Text style={styles.footerText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
