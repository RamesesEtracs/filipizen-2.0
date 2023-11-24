import React from "react";
import { View, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import QRCodeButton from "../utils/QRCodeScanner/QRCodeScanner";
import TabBackground from "./tabBackground";

const { width } = Dimensions.get("window");

//displaying the Icon Tabs
const NavigationIcon = ({ name }: { name: string }) => {
  const renderIcon = (routeName: string) => {
    switch (routeName) {
      case "Home":
        return <Ionicons size={25} name="home-outline" />;
      case "Credentials":
        return <Ionicons size={25} name="menu" />;
      case "Wallet":
        return <Ionicons size={25} name="wallet-outline" />;
      case "Settings":
        return <Ionicons size={25} name="settings-outline" />;
      default:
        break;
    }
  };
  return renderIcon(name);
};

const BottomTabsLayout = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={{ flexDirection: "row", padding: 37 }}>
      {/* <TabBackground color=''/> */}
      <View style={StyleSheet.absoluteFill}>
        <View style={{ flexDirection: "row" }}>
          {state.routes.map((route: any, index: number) => {
            if (route.name == "PlaceholderScreen") {
              return (
                <View key={index} style={{ bottom: 25 }}>
                  <QRCodeButton />
                </View>
              );
            }
            const { options } = descriptors[route.key];

            // checks if 'options.tabBarLabel' exists.
            // If not, it checks for options.title, if both are false, then the route name will be the default
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            //function that handles the navigation for every Tab
            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <Pressable
                  onPress={onPress}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                >
                  <View style={{ alignItems: "center", padding: 8 }}>
                    <NavigationIcon name={label} />
                    <Text>{label}</Text>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default BottomTabsLayout;
