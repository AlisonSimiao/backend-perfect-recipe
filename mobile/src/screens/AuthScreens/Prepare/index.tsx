import { Image, Text, View } from 'react-native'
import React from 'react'

import { styles } from './styles'
import Header from '../../../components/Header'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../router/MainStacks'

interface ListItemProps {
  item: {
    id: number;
    name: string; // Moved name property up to fix structure
    image: string;
    quantity: number;
  }
}



export default function PrepareScreen({route}: ListItemProps) {
  const { item } = route.params as ListItemProps;
  const { name, image, quantity } = item;
  return (
    <View style={styles.container}>
      <Header title='Preparar receita' />
    
      <View style={styles.headerContainer}>
        
          <Image source={{ uri: image }} style={styles.image} />
          <View>
          <Text>{name}</Text>
          <Text>Quantidade: {quantity}</Text>
          </View>
         
        </View>
   
     
    </View>
  )
}

