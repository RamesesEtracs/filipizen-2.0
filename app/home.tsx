import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import RegistrationStackNavigator from "@src/navigation/RegistrationStackNavigator";

import BottomTabs from "@src/navigation/BottomTabsNavigation";

const MainStack = createStackNavigator();

const Home = () => {
  const isLoggedIn = false;

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <MainStack.Group>
          <MainStack.Screen
            name="Registration"
            component={RegistrationStackNavigator}
          />
        </MainStack.Group>
      ) : (
        <MainStack.Group>
          <MainStack.Screen
            name="Registration"
            component={BottomTabs}
          />
        </MainStack.Group>
      )}
    </MainStack.Navigator>
  );
};

export default Home;
