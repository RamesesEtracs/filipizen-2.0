import React from 'react'

import { View, Text, Pressable } from 'react-native'

import buttonStyles from './button.style'

const Button: React.FC<buttonProperties> = ({
  buttonName,
  buttonColor,
  buttonNameColor,
  buttonLayout,
  onPress

}) => {
  return (
    <View>
      <Pressable
        style={{
          ...buttonStyles.container,
          ...buttonLayout,
          backgroundColor: buttonColor,
        }}
        onPress={onPress}
      >
        <Text style={{ color: buttonNameColor }}>{buttonName}</Text>
      </Pressable>
    </View>
  )
}

export default Button;
