import React from 'react';
import { Stack } from 'expo-router';

import  { View, Text, StyleSheet } from 'react-native';
import Login from '@src/screens/login/Login';
import Registration from '../src/screens/registration/register/Registration';
import CreateMPIN from '../src/screens/registration/creatempin/CreateMpin';
import Congratulations from '../src/screens/registration/congratulations/Congratulations';
import WelcomePage from '@src/screens/welcome/welcomeScreen';
import BiometricFunction from '@src/biometricFunction';


const Home = () => {
    return (
        <View style= {{flex:1}}>
            <Stack.Screen 
            options={{
                headerShown: false
            }}/>
            {/*<WelcomePage />*/}
           {/*<Login />*/}
          {/*<Registration onPress={undefined} />*/}
           {/*<CreateMPIN onPress={undefined} />*/}
           <Congratulations onPress={undefined} />
        </View>
    );
}


export default Home;

