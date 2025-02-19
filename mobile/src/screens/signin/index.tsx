import React, { useState } from 'react';
import { Image, Text, View, ImageBackground, Pressable, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';

import FundoImg from '../../assets/img/Image.png'
import LogoImg from '../../assets/img/logo.png'

const SignInScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
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
};

export default SignInScreen;