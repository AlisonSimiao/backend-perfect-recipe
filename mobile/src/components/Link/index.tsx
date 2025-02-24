import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface LinkProps {
  title: string;
  onPress: () => void;
  style?: StyleSheet;
}


export default function Link({ title, onPress, style }: LinkProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.forgotPassword}>{title}</Text>
    </Pressable>
  );
}