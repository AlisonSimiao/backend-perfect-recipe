import { ImageBackground, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Header from '../../components/Header';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  CodeOtp: { email: string };
  CreateAccounts: undefined;
};

type ForgotPasswordData = {
  email?: string;
}

const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email('Email invalido').required('Email e obrigatorio'),
});


export default function ForgotPasswordScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<ForgotPasswordData>({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: ForgotPasswordData) => {
    navigation.navigate('CodeOtp', { email: data.email });
  }

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../../assets/img/Image.png')} style={styles.container} resizeMode='cover'>
        <View>
          <Header title='Recuperar conta' />
        </View>
        <KeyboardAvoidingView behavior='padding' style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.formTitle}>Informe seu email para enviarmos o código de verificação.</Text>
            <View>
              <Controller

                control={control}
                rules={{ required: true }}
                name='email'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input placeholder='Email'  onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
              />
              {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
            </View>
          </View>

          <View style={styles.footer}>
            <Button title='Enviar' onPress={handleSubmit(onSubmit)} />
            <Link title='Ainda nao tem conta ?' onPress={() => navigation.navigate('CreateAccounts' as never)} />
          </View>
        </KeyboardAvoidingView>

      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}