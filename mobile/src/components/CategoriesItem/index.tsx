import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import icons from '../../assets/icon';
import { categoriesItem } from '../../mocks/CategoriesItem';

type CategoriesItemProps = {
  item: {
    id: number;
    name: string;
    image:any;
  };
};

export default function CategoriesItem({ item }: CategoriesItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={item.image}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
}