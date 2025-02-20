import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface LinkProps {
  title: string;
  onPress: () => void;

}


export default function Link({ title, onPress }: LinkProps) {
  return (
    <Pressable onPress={onPress} style={{ marginTop: 10 }}>
      <Text style={styles.forgotPassword}>{title}</Text>
    </Pressable>
  );
}