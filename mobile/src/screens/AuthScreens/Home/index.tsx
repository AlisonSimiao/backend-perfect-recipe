import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import LIstitem from '../../../components/LIstitem';
import Link from '../../../components/Link';
import HeaderLIst from '../../../components/HeaderLIst';


export default function Home() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Sorvete de Chocolate',
      image: 'https://st3.depositphotos.com/1672917/18208/i/1600/depositphotos_182089108-stock-photo-condensed-milk-pudding-close-view.jpg',
      description: 'Sorvete de Chocolate com calda de chocolate',
    },

    {
      id: 2,
      name: 'Sorvete de Morango',
      image: 'https://st3.depositphotos.com/1672917/18208/i/1600/depositphotos_182089108-stock-photo-condensed-milk-pudding-close-view.jpg',
      description: 'Sorvete de Morango com calda de morango',
    },

    {
      id: 3,
      name: 'Sorvete de Morango',
      image: 'https://st3.depositphotos.com/1672917/18208/i/1600/depositphotos_182089108-stock-photo-condensed-milk-pudding-close-view.jpg',
      description: 'Sorvete de Morango com calda de morango',
    },
    

    {
      id: 4,
      name: 'Sorvete de Morango',
      image: 'https://st3.depositphotos.com/1672917/18208/i/1600/depositphotos_182089108-stock-photo-condensed-milk-pudding-close-view.jpg',
      description: 'Sorvete de Morango com calda de morango',
    },


  ]);
  return (
    <View>
      <Header />

      <View style={styles.searchArea}>
        <View style={styles.searchAreaInput}>
          <Input placeholder='Pesquisar receita...' secureTextEntry={false} />
          <MaterialIcons  name='search' size={24} color='#66324B' />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
       <HeaderLIst title='Em alta' link='Ver todas' />
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recipes}
          renderItem={({ item }) => <LIstitem item={item} />}
        />
      
        {/* LIst 2 */}

        <HeaderLIst title='Favoritos' link='Ver todas' />
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recipes}
          renderItem={({ item }) => <LIstitem item={item} />}
        />

        <HeaderLIst title='Ultimos acessados' link='Ver todas' />
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recipes}
          renderItem={({ item }) => <LIstitem item={item} />}
        />

        {/* Categories */}

        <HeaderLIst title='Categorias' link='Ver todas' />
        
      </ScrollView>
    </View>
  );
}