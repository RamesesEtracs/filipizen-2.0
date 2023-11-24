import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

//styling & constants
import styles from "./style";
import { images } from "@constants";

const Congratulations = ({ onPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Image source={images.congrats} />
      </View>
      <View style={styles.congratsContainer}>
        <View style={styles.check}>
          <Image source={images.check} />
        </View>
        <Text style={styles.congratulations}>Congratulations!</Text>
        <Text style={styles.statement}>
          Your Filipizen account has been created successfully.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPress} style={styles.buttonOk}>
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
    </SafeAreaView>
  );
};

export default Congratulations;
