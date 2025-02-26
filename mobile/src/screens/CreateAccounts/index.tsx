import { Alert, ImageBackground, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Header from '../../components/Header';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import apiServices from '../../services/api';

import * as yup from 'yup';

type SignUpData = {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUpSchema = yup.object().shape({
  email: yup.string().email('Email invalido').required('Email e obrigatorio'),
  password: yup.string().required('Senha e obrigatoria'),
  confirmPassword: yup.string().required('Confirmacao de senha e obrigatoria'),
});


export default function CreateAccountsScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async(data: SignUpData) => {
    console.log(data)
    if(data.password !== data.confirmPassword) {
      Alert.alert('As senhas nao conferem')
      return;
    }
   
   
    const SignUp = await apiServices.SignUp<void>(data.email, data.password);
    console.log(SignUp)
    if(SignUp) {
      if([404, 409, 401].includes(SignUp.status)) {
        Alert.alert(SignUp.message as string)
        return;
      }
      return;
    }


    //TODO: Adicionar Toast de usuario criado com sucesso
    Alert.alert('Usuario criado com sucesso')
    navigation.navigate('SignIn' as never)
    



   
  }

  const navigation = useNavigation();
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../../assets/img/Image.png')} style={styles.container} resizeMode='cover'>
        <View>
          <Header title='Criar conta' />
        </View>

        <KeyboardAvoidingView behavior='padding' style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.formTitle}>Email</Text>
            <View>
              <Controller
                control={control}
                rules={{ required: true }}
                name='email'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input placeholder='Email' secureTextEntry={false} onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
              />
              {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
            </View>
            <View>
              <Controller
                control={control}
                rules={{ required: true }}
                name='password'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input placeholder='Senha' icon onChangeText={onChange} onBlur={onBlur} value={value} secureTextEntry={true}/>
                )}
              />
              {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
            </View>
            <View>
              <Controller
                control={control}
                rules={{ required: true }}
                name='confirmPassword'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input placeholder='Confirmar Senha' icon onChangeText={onChange} onBlur={onBlur} value={value} secureTextEntry={true}/>
                )}
              />
              {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}
            </View>
          </View>

          <View style={styles.footer}>
            <Button title='Criar Conta' onPress={handleSubmit(onSubmit)} />
            <Link title='Ainda nao tem conta ?' onPress={() => navigation.navigate('SignIn' as never)} />
          </View>


        </KeyboardAvoidingView>


      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}