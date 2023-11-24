import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "@src/screens/registration/register/style";

import { images } from "@constants";

const Registration = ({ navigation }) => {

  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handleNumberChange = (textInput: string) => {
    setNumber(textInput);
  };

  //handleSubmit function

  const handleSubmit = async () => {
    const emailChecker =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const value = {
      email: email,
      number: number,
    };

    try {
      if (email === "") {
        alert("This section should not be empty");
        return;
      } else if (!emailChecker.test(email)) {
        alert("Please provide a valid email address");
        return;
      }
      if (number === " " || number.length !== 11) {
        alert("Please provide a valid number");
        return;
      }
      await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("CreateMPIN");
  };

  return (
    <View style={{ flex: 1 }}>
      {/* //handling the keyboard visibility and ensuring that the user interface adjusts appropriately when the keyboard is displayed. (Not yet working) */}
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.container}>
          <View style={styles.image}>
            <Image source={images.hello} />
          </View>

          <View style={styles.registrationform}>
            <Text style={styles.create}>Create an Account</Text>
            <Text style={styles.start}>
              To start, please enter your email and phone number.
            </Text>
            <View style={styles.emailInput}>
              <View style={styles.inputContainer}>
                <FontAwesome5 name="user" size={16} color="#565656" />
                <TextInput
                  style={styles.email}
                  onChangeText={handleEmailChange}
                  value={email}
                  placeholder="Email"
                />
              </View>
            </View>
            <View style={styles.phoneInput}>
              <View style={styles.inputContainer}>
                <Feather name="phone" size={16} color="#565656" />
                <TextInput
                  style={styles.email}
                  onChangeText={handleNumberChange}
                  value={number}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.click}>
                <Text>
                  By clicking "next", we will gather network information from
                  your phone number in order to send you a One-Time Password
                  (OTP) .{" "}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.buttonNext}
                >
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Registration;
