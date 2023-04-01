import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ThreeOptionSlider = memo(() => {
  return (
    <View style={styles.threeoptionslider}>
      <View style={styles.threeoptionsliderChild} />
      <Image
        style={styles.threeoptionsliderItem}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.newsFeed, styles.newsFlexBox]}>Year</Text>
      <Text style={[styles.newsFeed1, styles.newsFlexBox]}>Decade</Text>
      <Text style={[styles.badges, styles.newsFlexBox]}>All</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  newsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    width: "29.75%",
    height: "18.7%",
    position: "absolute",
  },
  threeoptionsliderChild: {
    height: "76.77%",
    width: "99.17%",
    top: "-7.67%",
    right: "0.83%",
    bottom: "30.9%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 5,
    left: "0%",
    position: "absolute",
  },
  threeoptionsliderItem: {
    height: "46.74%",
    width: "20.66%",
    top: "7.79%",
    right: "75.21%",
    bottom: "45.47%",
    left: "4.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  newsFeed: {
    left: "70.25%",
    top: "81.3%",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    width: "29.75%",
    height: "18.7%",
  },
  newsFeed1: {
    left: "34.71%",
    top: "81.3%",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    width: "29.75%",
    height: "18.7%",
  },
  badges: {
    top: "81.02%",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    width: "29.75%",
    height: "18.7%",
    left: "0%",
  },
  threeoptionslider: {
    height: "38.3%",
    width: "69.14%",
    top: "61.7%",
    right: "2.86%",
    bottom: "0%",
    left: "28%",
    position: "absolute",
  },
});

export default ThreeOptionSlider;
