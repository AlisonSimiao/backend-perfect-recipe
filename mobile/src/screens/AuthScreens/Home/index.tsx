import { FlatList, ScrollView, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import LIstitem from '../../../components/LIstitem';
import HeaderLIst from '../../../components/HeaderLIst';
import CategoriesItem from '../../../components/CategoriesItem';
import { recipes } from '../../../mocks/Recipes';
import { categoriesItem } from '../../../mocks/CategoriesItem';
import icons from '../../../assets/icon';

export default function Home() {

  const item = [{
    id: 1,
    name: 'Hamburguer',
    image: icons.hamburguer,
  },
  {
    id:2,
    name: 'Carne',
    image: icons.carne,
  },
  {
    id: 3,
      name: 'Sorvetes',
    image: icons.sorvete,
  },
  {
    id: 4,
    name: 'Milkshake',
    image: icons.milkshake,
  },
  {
    id: 5,
    name: 'bolos',
    image: icons.bolo,
  },
  {
    id: 6,
    name: 'Bebidas',
    image: icons.bebidas,
  }
]
  
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.searchArea}>
        <View style={styles.searchAreaInput}>
          <Input placeholder='Pesquisar receita...' secureTextEntry={false} />
          <MaterialIcons name='search' size={24} color='#66324B' />
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionContainer}>
          <HeaderLIst title='Em alta' link='Ver todas' />
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recipes}
            renderItem={({ item }) => <LIstitem item={item} />}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        <View style={styles.sectionContainer}>
          <HeaderLIst title='Favoritos' link='Ver todas' />
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recipes}
            renderItem={({ item }) => <LIstitem item={item} />}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        <View style={styles.sectionContainer}>
          <HeaderLIst title='Ultimos acessados' link='Ver todas' />
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recipes}
            renderItem={({ item }) => <LIstitem item={item} />}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        <View style={styles.sectionContainer}>
          <HeaderLIst title='Categorias' />
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={item}
            renderItem={({ item }) => <CategoriesItem item={item} />}
            contentContainerStyle={styles.categoriesContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
}