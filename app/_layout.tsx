import React from 'react';
import { Stack, Slot } from 'expo-router';

import { useFonts } from "expo-font";


export default function Layout() {
    const [fontsLoaded] = useFonts({
        RobotoLight : require('../assets/fonts/Roboto-Thin.ttf'),
        RobotoMedium : require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoRegular : require('../assets/fonts/Roboto-Regular.ttf'),
        RobotoBold : require('../assets/fonts/Roboto-Bold.ttf')
    });

    if (!fontsLoaded) {
        return null;
      }


    return (
       <Stack screenOptions={{ headerShown: false }}/>     
    )
}
