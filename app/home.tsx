import React from 'react';
import { Stack } from 'expo-router';
import  { View, Text } from 'react-native';
import Login from '../src/login/Login'
import Registration from '../src/registration/Registration';
import CreateMpin from '../src/registration/CreateMpin';


const Home = () => {
    return (
        <View style= {{flex:1}}>
            <Stack.Screen 
            options={{
                headerShown: false
            }}/>
           {/*<Login />*/}
           <Registration onPress={undefined} />
           {/*<CreateMpin onPress={undefined} />*/}

        </View>
    );
}


export default Home;