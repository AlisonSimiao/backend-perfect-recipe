import { ImageBackground, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Header from '../../components/Header';

export default function SignInScreen() {
  const navigation = useNavigation();
  return (

    <ImageBackground source={require('../../assets/img/Image.png')} style={styles.container}>
      <View >
        <Header title='Entrar' />
      </View>

      <View style={styles.form}>
        <View style={styles.formContent}>
          <Text style={styles.formTitle}>Email</Text>
          <Input placeholder='Email' secureTextEntry={false} />
          <Input placeholder='Senha' icon />

          <Link title='Esqueceu sua senha?' onPress={() => navigation.navigate('ForgotPassword' as never)} />

        </View>

        <View style={styles.footer}>
          <Button title='Entrar' onPress={() => alert('Entrar')} />
          <Link title='Ainda nao tem conta ?' onPress={() => navigation.navigate('CreateAccounts' as never)} />
        </View>


      </View>


    </ImageBackground>
  );
}