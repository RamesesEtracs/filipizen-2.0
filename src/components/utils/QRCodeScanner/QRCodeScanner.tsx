import React from "react";
import { View, Pressable, Text, Image } from "react-native";

import { images } from "@constants";

const QRCodeButton = () => {
  return (
    <View>
      <Pressable>
        <Image source={images.qrCodeButton} />
      </Pressable>
    </View>
  );
};

export default QRCodeButton;
