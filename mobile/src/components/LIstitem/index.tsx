import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

interface ListItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    description: string;
  }
}

export default function ListItem({ item }: ListItemProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Product' as never)}
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