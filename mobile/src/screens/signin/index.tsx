import React from 'react';
import { Image, Text, View, ImageBackground } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';

import FundoImg from '../../assets/img/Image.png'
import LogoImg from '../../assets/img/logo.png'

const SignInScreen: React.FC = () => {
  const handleLogin = () => {
    // Lógica de login
  };

  return (

    <ImageBackground source={FundoImg} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={LogoImg} style={styles.logo} />
        <Text style={styles.title}>Receitas perfeitas. Em qualquer quantidade.</Text>
      </View>
      <View style={styles.btnsArea}>

      </View>
    </ImageBackground>

  );
};

export default SignInScreen;