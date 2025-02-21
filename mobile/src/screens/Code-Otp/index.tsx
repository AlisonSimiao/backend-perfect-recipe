import { ImageBackground, Text, View } from 'react-native';

import styles from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Header from '../../components/Header';
import { NavigationRoot } from '../../utils';
import { ERoutes } from '../../router/MainStacks';

export default function CodeOtpScreen() {
  const navigation = useNavigation();
  return (

    <ImageBackground source={require('../../assets/img/Image.png')} style={styles.container}>
      <View >
        <Header title='Verificação' />
      </View>

      <View style={styles.form}>
        <View style={styles.formContent}>
          <Text style={styles.formTitle}>Informe seu email para enviarmos o código de verificaçãoInsira o código de verificação..</Text>
          <Input placeholder='Email' secureTextEntry={false} />
        </View>

        <View style={styles.footer}>
          <Button title='Enviar' onPress={() => alert('Entrar')} />
          <Link title='Ainda nao tem conta ?' onPress={() => NavigationRoot(navigation, ERoutes.CreateAccounts)} />
        </View>


      </View>


    </ImageBackground>
  );
}