import React from 'react';
import { Stack } from 'expo-router';
import  { View, Text, StyleSheet } from 'react-native';


//components
import Login from '@src/screens/login/Login';
import WelcomePage from '@src/screens/welcome/welcomeScreen';




const Home = () => {
    return (
        <View style= {styles.container}>
           <WelcomePage/>
        </View>
    );
}


export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })