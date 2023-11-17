
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';



//Tab Button Layout
const TabButton = () => {
    return (
        <TouchableOpacity>
            <Text>Home</Text>
        </TouchableOpacity>
    )
}


const Tab = createBottomTabNavigator;

const BottomTab = () => {
  return (
    <NavigationContainer>
    </NavigationContainer>
  
  )
}

export default BottomTab


