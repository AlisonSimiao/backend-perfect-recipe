import { Image, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../../components/Header';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../../components/Button';
import styles from './styles';
import { theme } from '../../../global/theme';


// Since RootStackParamList is not exported, we will define a type for the route params directly
type ProductRouteParams = {
  item: {
    name: string;
    description: string;
    image: string;
    favorite: boolean;
  };
};

type ProductScreenProps = {
  route: RouteProp<ProductRouteParams, 'Product'>;
};
export default function ProductScreen({ route }: ProductScreenProps) {
  const { item } = route.params as ProductRouteParams;
  const { name, description, image  } = item;
  const [favorite, setFavorite] = useState(false);
  const navigation = useNavigation();

  function handleFavorite() {
    setFavorite(prevFavorite => !prevFavorite);
  }

  function handlePrepare() {
    navigation.navigate('Prepare', { item });
  }

  return (
    <View style={styles.container}>
      <Header title={name}  />

      <View style={styles.containerImage}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <View style={styles.containerTitle}>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity onPress={handleFavorite}>
          <MaterialIcons 
            name={favorite ? 'favorite' : 'favorite-outline'} 
            size={40} 
            color={theme.colors.btnBackground} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerDescription}>
        <Text style={styles.description}>{description}</Text>
       
      </View>

      <View style={styles.containerButton}>
        <Button title='Preparar' onPress={handlePrepare} />
      </View>

    
     
    </View>
  );
}