import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { RootStackParamList } from '../../router/MainStacks';
import { StackNavigationProp } from '@react-navigation/stack';


interface ListItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    description: string;
    favorite: boolean; // Ensure this matches your data structure
  }
}

export default function ListItem({ item }: ListItemProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Product', { item } as any )}
    >
      <View style={styles.contentImage}>
        <Image 
          style={styles.image} 
          source={{ uri: item.image }} 
        />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}