import { View, SafeAreaView, Text, StatusBar } from 'react-native';

import { styles } from '../../Intro/styles';
import Header from '../../../components/Header';
import { theme } from '../../../global/theme';


export default function Home() {
  return (
    <View style={{
      backgroundColor: theme.colors.primary,
      flex: 1,


    }}>
      <View>
        <Header title='Receitas' />
      </View>
      <StatusBar barStyle='dark-content' />

      <Text>Ola</Text>
    </View>
  );
}