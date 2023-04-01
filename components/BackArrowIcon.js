import React, { useMemo, memo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BackArrowIcon = memo(
  ({
    backArrow,
    backArrowHeight,
    backArrowTop,
    backArrowRight,
    backArrowBottom,
    backArrowLeft,
  }) => {
    const backArrowIconStyle = useMemo(() => {
      return {
        ...getStyleValue("height", backArrowHeight),
        ...getStyleValue("top", backArrowTop),
        ...getStyleValue("right", backArrowRight),
        ...getStyleValue("bottom", backArrowBottom),
        ...getStyleValue("left", backArrowLeft),
      };
    }, [
      backArrowHeight,
      backArrowTop,
      backArrowRight,
      backArrowBottom,
      backArrowLeft,
    ]);

    return (
      <Image
        style={[styles.backarrowIcon, backArrowIconStyle]}
        resizeMode="cover"
        source={backArrow}
      />
    );
  }
);

const styles = StyleSheet.create({
  backarrowIcon: {
    position: "absolute",
    height: "65.73%",
    width: "23.72%",
    top: "20.47%",
    right: "77.42%",
    bottom: "13.79%",
    left: "-1.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
});

export default BackArrowIcon;
