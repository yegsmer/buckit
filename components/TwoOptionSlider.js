import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TwoOptionSlider = memo(
  ({
    twoOptionSliderHeight,
    twoOptionSliderTop,
    twoOptionSliderRight,
    twoOptionSliderBottom,
    twoOptionSliderLeft,
    ellipse3,
    newsFeed,
    badges,
  }) => {
    const twoOptionSliderStyle = useMemo(() => {
      return {
        ...getStyleValue("height", twoOptionSliderHeight),
        ...getStyleValue("top", twoOptionSliderTop),
        ...getStyleValue("right", twoOptionSliderRight),
        ...getStyleValue("bottom", twoOptionSliderBottom),
        ...getStyleValue("left", twoOptionSliderLeft),
      };
    }, [
      twoOptionSliderHeight,
      twoOptionSliderTop,
      twoOptionSliderRight,
      twoOptionSliderBottom,
      twoOptionSliderLeft,
    ]);

    return (
      <View style={[styles.twooptionslider, twoOptionSliderStyle]}>
        <View style={styles.twooptionsliderChild} />
        <Image
          style={styles.twooptionsliderItem}
          contentFit="cover"
          source={ellipse3}
        />
        <Text style={[styles.newsFeed, styles.badgesFlexBox]}>{newsFeed}</Text>
        <Text style={[styles.badges, styles.badgesFlexBox]}>{badges}</Text>
      </View>
    );
  }
);

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
    height: "23.21%",
    width: "45.71%",
    top: "75%",
    right: "4.29%",
    bottom: "1.79%",
    left: "50%",
    position: "absolute",
  },
});

export default TwoOptionSlider;
