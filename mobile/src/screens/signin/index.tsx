import { ImageBackground, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

export default function SignInScreen() {
  const navigation = useNavigation();
  return (

    <ImageBackground source={require('../../assets/img/Image.png')} style={styles.container}>
      <View >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.header}>
          <MaterialIcons name="arrow-back" size={47} color="white" />
          <Text style={styles.headerTitle}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <View style={styles.formContent}>
          <Text style={styles.formTitle}>Email</Text>
          <Input placeholder='Email' secureTextEntry={false} />
          <Input placeholder='Senha' icon />

          <Pressable onPress={() => alert('Esqueceu sua senha?')}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </Pressable>

        </View>

        <View style={styles.footer}>
          <Button title='Entrar' onPress={() => alert('Entrar')} />
          <Pressable onPress={() => alert('Esqueceu sua senha?')} style={{ marginTop: 10 }}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </Pressable>
        </View>


      </View>


    </ImageBackground>
  );
}