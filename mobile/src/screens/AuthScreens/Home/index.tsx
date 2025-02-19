import { View, SafeAreaView, Text, StatusBar } from 'react-native';

import { styles } from '../../Intro/styles';


export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
    </View>
  );
}