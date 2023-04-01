import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TwoOptionSlider = memo(() => {
  return (
    <View style={styles.twooptionslider}>
      <View style={styles.twooptionsliderChild} />
      <Image
        style={styles.twooptionsliderItem}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.newsFeed, styles.badgesFlexBox]}>Nominees</Text>
      <Text style={[styles.badges, styles.badgesFlexBox]}>Winners</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  badgesFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    top: "81.25%",
    width: "45%",
    height: "18.75%",
    position: "absolute",
  },
  twooptionsliderChild: {
    height: "76.99%",
    width: "100%",
    top: "-7.69%",
    right: "0%",
    bottom: "30.7%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 5,
    left: "0%",
    position: "absolute",
  },
  twooptionsliderItem: {
    height: "46.88%",
    width: "31.25%",
    top: "7.81%",
    right: "62.5%",
    bottom: "45.31%",
    left: "6.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  newsFeed: {
    left: "55%",
  },
  badges: {
    left: "0%",
  },
  twooptionslider: {
    height: "38.24%",
    width: "45.71%",
    top: "61.76%",
    right: "2.86%",
    bottom: "0%",
    left: "51.43%",
    position: "absolute",
  },
});

export default TwoOptionSlider;
