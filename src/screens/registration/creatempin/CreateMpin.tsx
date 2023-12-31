//dependencies
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
import { useNavigation } from "@react-navigation/native";

//components
import styles from "@src/screens/registration/creatempin/style";
import { images } from "@constants";
import { color } from "@constants";

const CreateMPIN = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (number) => {
    setPassword(number);
  };
  const handleConfirmPasswordChange = (number) => {
    setConfirmPassword(number);
  };

  const handleSubmit = ({ navigation }) => {
    if (password === confirmPassword) {
      //passwords matched, proceed to next
      console.log("Passwwords match");
    } else {
      //Passwords don't match
      console.log("Passwords do not match");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View>
        <View style={styles.image}>
          <Image source={images.writing} />
        </View>

        <View style={styles.registrationform}>
          <Text style={styles.create}>Create MPIN</Text>
          <Text style={styles.start}>
            Your MPIN serves as your password. To maintain access to security,
            refrain from sharing your MPIN to anyone.
          </Text>
          <View style={styles.emailInput}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.mpin}
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry={true}
                placeholder="Enter 4-digit MPIN"
                keyboardType="numeric"
              ></TextInput>
            </View>
          </View>
          <View style={styles.phoneInput}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.mpin}
                onChangeText={handleConfirmPasswordChange}
                value={confirmPassword}
                secureTextEntry={true}
                placeholder="Confirm 4-digit MPIN"
                keyboardType="numeric"
              ></TextInput>
            </View>
            <View style={styles.statement}>
              <Text style={{ color: color.darkGray }}>
                By creating an account, you agree to abide Filipizen's {""}
                <TouchableOpacity onPress={() => console.log("Terms Pressed")}>
                  <Text style={{ color: color.primary }}>
                    Terms and Conditions.
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Congratulations")}
                style={styles.buttonNext}
              >
                <Text style={{ color: "white" }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateMPIN;
