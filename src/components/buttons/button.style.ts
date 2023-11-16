import { StyleSheet } from 'react-native';

//styling
import { textColor, color } from '../../../constants/themes';

const buttonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  customButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    top: 300,
    marginTop: 70
  },
})

export default buttonStyles;