import React from 'react';
import { Stack } from 'expo-router';
import  { View, Text } from 'react-native';
import Login from '../components/login/Login';


const Home = () => {
    return (
        <View style= {{flex:1}}>
            <Stack.Screen 
            options={{
                headerShown: false
            }}
            />
            <Login />
        </View>
    );
}


export default Home;