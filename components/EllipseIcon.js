import React, { memo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const EllipseIcon = memo(({ ellipse5 }) => {
  return (
    <Image
      style={styles.trackediconChild}
      resizeMode="cover"
      source={ellipse5}
    />
  );
});

const styles = StyleSheet.create({
  trackediconChild: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
});

export default EllipseIcon;
