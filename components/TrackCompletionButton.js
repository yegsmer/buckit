import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TrackCompletionButton = memo(() => {
  return (
    <View
      style={[styles.trackcompletionbutton, styles.tracktoggleIconPosition]}
    >
      <Image
        style={[styles.tracktoggleIcon, styles.tracktoggleIconPosition]}
        resizeMode="cover"
        source={require("../assets/tracktoggle.png")}
      />
      <Text style={styles.text}>30%</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  tracktoggleIconPosition: {
    bottom: "0%",
    position: "absolute",
  },
  tracktoggleIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text: {
    height: "41.43%",
    width: "65.71%",
    top: "28.57%",
    left: "17.14%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  trackcompletionbutton: {
    height: "41.18%",
    width: "20%",
    top: "58.82%",
    right: "53.14%",
    left: "26.86%",
  },
});

export default TrackCompletionButton;
