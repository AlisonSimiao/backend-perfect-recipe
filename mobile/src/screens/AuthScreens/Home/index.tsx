import { FlatList, ScrollView, View } from 'react-native';
import { styles } from './styles';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import LIstitem from '../../../components/LIstitem';
import HeaderLIst from '../../../components/HeaderLIst';
import CategoriesItem from '../../../components/CategoriesItem';
import { recipes } from '../../../mocks/Recipes';

import icons from '../../../assets/icon';

export default function Home() {

  const item = [{
    id: 1,
    name: 'Hamburguer',
    image: icons.hamburguer,
    description: 'Hamburguer de carne bovina e suína',
  },
  {
    id:2,
    name: 'Carne',
    image: icons.carne,
    description: 'Carne bovina e suína',
  },
  {
    id: 3,
      name: 'Sorvetes',
    image: icons.sorvete,
    description: 'Sorvetes e milkshakes',
  },
  {
    id: 4,
    name: 'Milkshake',
    image: icons.milkshake,
    description: 'Sorvetes e milkshakes',
  },
  {
    id: 5,
    name: 'bolos',
    image: icons.bolo,
    description: 'Bolos doces e salgados',
  },
  {
    id: 6,
    name: 'Bebidas',
    image: icons.bebidas,
    description: 'Bebidas geladas e quentes',
  }
]
  
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.searchArea}>
        <View style={styles.searchAreaInput}>
          <Input placeholder='Pesquisar receita...' secureTextEntry={false} style={{ flex: 1 }} search/>
          
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