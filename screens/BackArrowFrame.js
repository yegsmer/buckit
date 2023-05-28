import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const BackArrowFrame = () => {
  return (
    <View style={styles.backarrowframe}>
      <Image
        style={styles.backarrowIcon}
        contentFit="cover"
        source={require("../assets/backarrow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backarrowIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 75,
    height: 59,
  },
  backarrowframe: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 59,
  },
});

export default BackArrowFrame;
