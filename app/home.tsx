import React from 'react';
import { Stack } from 'expo-router';
import  { View, Text, StyleSheet } from 'react-native';


//components
import Login from '@src/screens/login/Login';
import WelcomePage from '@src/screens/welcome/welcomeScreen';
import BiometricFunction from '@src/biometricFunction';




const Home = () => {
    return (
        <View style= {styles.container}>
           {/* <WelcomePage/> */}
           <BiometricFunction/>
        </View>
    );
}


export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })