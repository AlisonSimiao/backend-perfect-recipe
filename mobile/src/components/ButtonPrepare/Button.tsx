import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../global/theme';

export default function ButtonPrepare() {
 return (
  <View>
    <TouchableOpacity>
      <Text style={styles.quantityText}>
        {quantity} Unidade Grandes 
        <MaterialCommunityIcons 
        name="lead-pencil" 
        size={14} 
        color={theme.colors.btnBackground}  
        />
      </Text>
    </TouchableOpacity>
  </View>
  
  );
}