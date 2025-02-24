import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, AntDesign, } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { useEffect, useState } from 'react';
import { ERoutes } from '../../router/MainStacks';



type HeaderProps = {
  title?: string;
  slogan?: string;
}
type Theme = {
  color: string;
  IconBack: any;
  size: number;
  iconAction?: any;
  slogan?: string;
  sloganColor?: string;
}

enum EStatus {
  Auth

}

export default function Header({ title, slogan }: HeaderProps) {
  const [notification, setNotification] = useState(10);
  const navigation = useNavigation();
  const route = useRoute();
  const [theme, setTheme] = useState<Theme>({
    color: 'white',
    IconBack: () => <MaterialIcons name="arrow-back" size={24} color="black" />,
    size: 47,

  });


  useEffect(() => {
    switch (route.name) {
      case ERoutes.SignIn:
      case ERoutes.CreateAccounts:
      case ERoutes.ForgotPassword:
      case ERoutes.CodeOtp:
        setTheme({
          color: 'white',
          IconBack: () => <MaterialIcons name='arrow-back' size={theme?.size} color={theme?.color} />,
          size: 47
        })

        break;
      case ERoutes.ReceitaScreen:
        setTheme({
          color: '#66324B',
          IconBack: () => <AntDesign name='arrowleft' size={theme?.size} color='#66324B' />,
          size: 47,
          iconAction: () => <AntDesign name='plus' size={theme?.size} color='#66324B' />
        })
        break;
      case ERoutes.Product:
        setTheme({
          color: '#66324B',
          IconBack: () => <AntDesign name='arrowleft' size={theme?.size} color='#66324B' />,
          size: 47,
          iconAction: () => <AntDesign name='plus' size={theme?.size} color='#66324B' />
        })
        break;
      case ERoutes.Home:
        setTheme({
          color: '#66324B',
          sloganColor: '#66324B',
          IconBack: () => <MaterialIcons name='menu' size={33} color='#66324B' />,
          size: 47,
          slogan: 'KiSorvetes',
          iconAction: () => <Image source={require('../../assets/img/business 1.png')} style={styles.iconAction} />
        })
        break;
    }
  }, [route.name])


  return (

    <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <theme.IconBack />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme?.color }]}>{title}</Text>
      </View>

      {
        theme?.iconAction && (
          <TouchableOpacity onPress={() => { }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={{ color: '#ff0000', fontSize: 18, fontWeight: 'bold' }}>kiSorvetes</Text>
              <theme.iconAction />
            </View>

          </TouchableOpacity>
        )

      }
    </View>
  );
}