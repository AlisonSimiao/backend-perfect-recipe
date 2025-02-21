import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Header from '../../components/Header';

export default function CreateAccountsScreen() {
  const navigation = useNavigation();
  return (

    <ImageBackground source={require('../../assets/img/Image.png')} style={styles.container}>
      <View >
        <Header title='Criar Conta' />
      </View>

      <View style={styles.form}>
        <View style={styles.formContent}>
          <Text style={styles.formTitle}>Email</Text>
          <Input placeholder='Email' secureTextEntry={false} />
          <Input placeholder='Senha' icon />
          <Input placeholder='Confirmar Senha' icon />
        </View>

        <View style={styles.footer}>
          <Button title='Criar Conta' onPress={() => alert('Entrar')} />
          <Link title='Ainda nao tem conta ?' onPress={() => navigation.navigate('SignIn' as never)} />
        </View>


      </View>


    </ImageBackground>
  );
}