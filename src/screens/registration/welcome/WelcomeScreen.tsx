import React from "react";
import { SafeAreaView, View, Image, Text, StatusBar } from "react-native";
import { Svg, Rect, Path } from "react-native-svg";
import { Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";


//styling & constants
import styles from "./style";
import buttonStyles from "@components/Buttons/button.style";
import { color, textColor } from "@constants";
import { images } from "@constants";


//components
import Button from "@components/Buttons/button";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", marginTop: 280 }}>
        <View style={styles.upperScreenContainer}>
          <View style={styles.bigCircleSVGContainer}>
            <Svg width="204" height="204" fill="none">
              <Rect width="204" height="204" fill={color.fadedWhite} rx="102" />
            </Svg>
          </View>

          <View style={styles.imageParentContainer}>
            <View style={styles.smallCircleSVGContainer}>
              <Svg width="112" height="110" fill="none">
                <Rect
                  width="108"
                  height="106"
                  x="5"
                  y="4"
                  fill={color.tertiary}
                  stroke="#fff"
                  stroke-width="4"
                  rx="53"
                />
              </Svg>
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={images.guyHoldingPhone}
                style={styles.imageLayout}
              />
            </View>
          </View>
        </View>

        <View style={styles.lowerScreenContainer}>
          <View>
            <Svg width="500" height="500" fill="none" viewBox="10 1 360 360">
              <Path
                fill={color.fadedWhite}
                d="M236.725 58.8247C245.906 33.8688 249.662 4.9021 306 0v455H4.28V170.681c-23.3698-50.358 52.9992-137.7035 131.037-81.1071 62.431 45.2771 93.619-1.634 101.408-30.7492Z"
              />
            </Svg>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>All in one app</Text>
              <Text style={styles.textBody}>
                Experience ease of doing business with the government.
              </Text>
            </View>
            <View style={buttonStyles.customButtonContainer}>
              <Button
                buttonLayout={{
                  width: 307,
                  height: 40,
                  borderRadius: 25,
                }}
                buttonName="Create an Account"
                buttonColor={color.primary}
                buttonNameColor={textColor.white}
                onPress={() => navigation.navigate("Registration")}
              />
            </View>
          </View>
        </View>
        <StatusBar barStyle="default" />
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
