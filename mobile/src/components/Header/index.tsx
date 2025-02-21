import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, AntDesign, } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { useEffect, useState } from 'react';
import { ERoutes } from '../../router/MainStacks';


type HeaderProps = {
  title: string;

}
type Theme = {
  color: string;
  IconBack: any;
  size: number;
  iconAction?: any;

}

enum EStatus {
  Auth

}

export default function Header({ title }: HeaderProps) {
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
        setTheme({
          color: 'white',
          IconBack: () => <MaterialIcons name={theme?.IconBack} size={theme?.size} color={theme?.color} />,
          size: 47
        })

        break;
      case ERoutes.Home:
        setTheme({
          color: '#66324B',
          IconBack: 'arrow-back',
          size: 47,
          iconAction: ''
        })
        break;
      case ERoutes.Product:
        setTheme({
          color: '#66324B',
          IconBack: () => <AntDesign name='arrowleft' size={theme?.size} color={theme?.color} />,
          size: 47,
          iconAction: () => <AntDesign name='plus' size={theme?.size} color={theme?.color} />
        })
        break;
    }
  }, [route.name])


  return (

    <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

        <TouchableOpacity onPress={() => { }}>
          <theme.IconBack />

        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme?.color }]}>{title}</Text>
      </View>

      {
        theme?.iconAction && (
          <TouchableOpacity onPress={() => { }}>
            <theme.iconAction />
          </TouchableOpacity>
        )

      }
    </View>
  );
}