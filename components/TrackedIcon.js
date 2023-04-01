import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import EllipseIcon from "./EllipseIcon";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TrackedIcon = memo(
  ({
    trackedIconRight,
    trackedIconLeft,
    trackedIconTop,
    trackedIconBottom,
    ellipse5,
  }) => {
    const trackedIconStyle = useMemo(() => {
      return {
        ...getStyleValue("right", trackedIconRight),
        ...getStyleValue("left", trackedIconLeft),
        ...getStyleValue("top", trackedIconTop),
        ...getStyleValue("bottom", trackedIconBottom),
      };
    }, [trackedIconRight, trackedIconLeft, trackedIconTop, trackedIconBottom]);

    return (
      <View style={[styles.trackedicon, trackedIconStyle]}>
        <EllipseIcon ellipse5={ellipse5} />
        <Text style={styles.trackedlistname}>{`Oscar
Best Picture Nominees 2020 `}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  trackedlistname: {
    height: "70%",
    width: "80%",
    top: "15%",
    left: "10%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  trackedicon: {
    height: "35.71%",
    width: "28.57%",
    top: "10.71%",
    right: "35.71%",
    bottom: "53.57%",
    left: "35.71%",
    position: "absolute",
  },
});

export default TrackedIcon;
