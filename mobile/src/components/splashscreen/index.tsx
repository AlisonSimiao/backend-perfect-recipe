import React from 'react';
import { ActivityIndicator, ImageBackground, Image, StatusBar } from 'react-native';
import { theme } from '../../global/theme';

import FundoImg from '../../assets/img/Image.png';
import LogoImg from '../../assets/img/logo.png';
import styles from './styles';



export const SplashScreen: React.FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <ImageBackground source={FundoImg} style={styles.container}>

        <Image source={LogoImg} />
        <ActivityIndicator size="large" color={theme.colors.btnBackground} />
      </ImageBackground>

    </>
  );
}


