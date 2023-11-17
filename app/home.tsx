import React from 'react';
import { Stack } from 'expo-router';

import  { View, Text, StyleSheet } from 'react-native';
import Login from '@src/screens/login/Login';
import Registration from '../src/registration/Registration';
import CreateMPIN from '../src/registration/CreateMpin';
import Congratulations from '../src/registration/Congratulations';
import WelcomePage from '@src/screens/welcome/welcomeScreen';
import BiometricFunction from '@src/biometricFunction';


const Home = () => {
    return (
        <View style= {{flex:1}}>
            <Stack.Screen 
            options={{
                headerShown: false
            }}/>
           <Login />
           {/*<Registration onPress={undefined} />*/}
           {/*<CreateMPIN onPress={undefined} />*/}
           {/*<Congratulations onPress={undefined} />*/}
        </View>
    );
}


export default Home;

