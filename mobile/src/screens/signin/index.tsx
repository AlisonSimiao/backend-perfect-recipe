import { Alert, ImageBackground, Keyboard, KeyboardAvoidingView, Pressable, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Header from '../../components/Header';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormData = {
  email?: string;
  password?: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Email invalido').required('Email e obrigatorio'),
  password: yup.string().required('Senha e obrigatoria'),
}).required();


export default function SignInScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: FormData) => {
    if (data.email === 'admin@admin.com' && data.password === '123456') {
      navigation.navigate('Home' as never);
    } else {
      Alert.alert('Email ou senha invalidos');
    }
  }

  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../../assets/img/Image.png')} style={styles.container} resizeMode='cover'>
        <View>
          <Header title='Entrar' />
        </View>
        <KeyboardAvoidingView behavior='padding' style={styles.form}>

          <View style={styles.formContent}>
            <Text style={styles.formTitle}>Email</Text>
            <View>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input placeholder='Email' secureTextEntry={false} onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
              />
              {errors.email && (
                <Text style={styles.error}>Email is required</Text>
              )}
            </View>

            <Text style={styles.formTitle}>Senha</Text>
            <View>
              <Controller
                control={control}
                name='password'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input placeholder='Senha' icon onChangeText={onChange} onBlur={onBlur} value={value} secureTextEntry={true}/>
                )}
              />
              {errors.password && (
                <Text style={styles.error}>Password is required</Text>
              )}
            </View>

            <Link title='Esqueceu sua senha?' onPress={() => navigation.navigate('ForgotPassword' as never)} />
          </View>

          <View style={styles.footer}>
            <Button title='Entrar' onPress={handleSubmit(onSubmit)} />
            <Link title='Ainda nao tem conta ?' onPress={() => navigation.navigate('CreateAccounts' as never)} />
          </View>
        </KeyboardAvoidingView>

      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}