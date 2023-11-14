import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReturnButton = ({onPress}) => {
    return (
      <View style={{
        marginTop: 30,   
        padding: 15,
      }}>
        <Ionicons onPress={onPress} name="chevron-back-sharp" size={30} color="black" />
      </View>
    )
}

export default ReturnButton;