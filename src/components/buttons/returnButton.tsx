import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReturnButton = ({onPress}) => {
    return (
      <View style={{
        position: 'absolute',
        top: 20,
        left: 10,
      }}>
        <Pressable onPress={onPress}>
          <Ionicons name="chevron-back-sharp" size={30} color="black" />
        </Pressable>
        
      </View>
    )
}

export default ReturnButton;