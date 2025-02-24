import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

interface HeaderLIstProps {
  title: string;
  link: string;
}

export default function HeaderLIst({ title, link }: HeaderLIstProps) {
  return (
    <View>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{title}</Text>
        <Pressable onPress={() => { }}>
          <Text style={styles.link}>{link}</Text>
        </Pressable>
      </View>
    </View>
  );
}