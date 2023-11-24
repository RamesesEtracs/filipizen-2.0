import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Pressable, Dimensions, ImageBackground, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


import { images } from '@constants';
import CredentialsScreen from '@src/screens/credentials/credentials';
import HomeScreen from '@src/screens/home/home';
import WalletScreen from '@src/screens/wallet/wallet';
import SettingsScreen from '@src/screens/settings/settings';
import BottomTabsLayout from '@components/BottomTabs/BottomTabsLayout';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    
      <BottomTab.Navigator initialRouteName={"home"} screenOptions={{headerShown: false}} tabBar={props => <BottomTabsLayout {...props}/>}>
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Credentials" component={CredentialsScreen}/>
        <BottomTab.Screen name="PlaceholderScreen" component={HomeScreen} />
        <BottomTab.Screen name="Wallet" component={WalletScreen}/>
        <BottomTab.Screen name="Settings"  component={SettingsScreen}/>
      </BottomTab.Navigator>
  
  )
}

export default BottomTabs;



