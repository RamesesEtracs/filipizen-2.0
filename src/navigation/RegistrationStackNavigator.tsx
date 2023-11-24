import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//components
import WelcomePage from "@src/screens/registration/welcome/WelcomeScreen";
import Registration from "@src/screens/registration/register/Registration";
import CreateMPIN from "@src/screens/registration/creatempin/CreateMpin";
import Congratulations from "@src/screens/registration/congratulations/Congratulations";

const Stack = createStackNavigator();

const RegistrationStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomePage">
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="CreateMPIN" component={CreateMPIN} />
      <Stack.Screen name="Congratulations" component={Congratulations} />
    </Stack.Navigator>
  );
};

export default RegistrationStackNavigator;
