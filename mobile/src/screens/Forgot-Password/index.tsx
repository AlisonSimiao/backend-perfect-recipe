import { ImageBackground, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Header from '../../components/Header';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../../assets/img/Image.png')} style={styles.container} resizeMode='cover'>
        <View>
          <Header title='Recuperar conta' />
        </View>
        <KeyboardAvoidingView behavior='padding' style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.formTitle}>Informe seu email para enviarmos o código de verificação.</Text>
            <Input placeholder='Email' secureTextEntry={false} />
          </View>

          <View style={styles.footer}>
            <Button title='Enviar' onPress={() => navigation.navigate('CodeOtp' as never)} />
            <Link title='Ainda nao tem conta ?' onPress={() => navigation.navigate('CreateAccounts' as never)} />
          </View>
        </KeyboardAvoidingView>

      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}