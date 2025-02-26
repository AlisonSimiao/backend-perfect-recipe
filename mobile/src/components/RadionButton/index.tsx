import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface RadioButtonProps {
  item: {
    id: string;
    name: string;
  };
}

export default function RadionButton({ item }: RadioButtonProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(prevState => !prevState);
  };

  return (
    <View style={styles.radioContainer}>
      <TouchableOpacity onPress={handlePress} style={styles.radioButton}>
       {
        isSelected ? (
          <View style={styles.radioInner} />
        ) : null
       }
      </TouchableOpacity>
      <Text style={{ marginLeft: 8 }}>{item.name}</Text>
    </View>
  );
}