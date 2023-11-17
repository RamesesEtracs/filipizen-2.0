import React from 'react'
import {authenticateAsync} from 'expo-local-authentication'


import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import Button from '@components/Buttons/button';
import { color, textColor } from '@constants';



//function to ask for biometrics login
const askForBiometrics = async () => 
    await authenticateAsync({
        disableDeviceFallback: true,
        promptMessage: "Enable biometrics login",
        cancelLabel: "Not now",
    });



const BiometricFunction = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Biometric Testing Page</Text>
        <Pressable style={{marginTop: 100}}>
            <Button
            buttonLayout={{
                width: 190,
                height: 40,
                borderRadius: 25,
            }}
            buttonName="Login using fingerscan"
            buttonColor={color.primary}
            buttonNameColor={textColor.white}
            onPress={askForBiometrics}/> 
        </Pressable>
    </SafeAreaView>
  )
}

export default BiometricFunction;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
})