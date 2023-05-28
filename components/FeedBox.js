import React, { useMemo, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FeedBox = memo(
  ({
    feedBoxHeight,
    feedBoxWidth,
    feedBoxTop,
    feedBoxRight,
    feedBoxBottom,
    feedBoxLeft,
    feedBoxBackgroundColor,
  }) => {
    const feedBoxStyle = useMemo(() => {
      return {
        ...getStyleValue("height", feedBoxHeight),
        ...getStyleValue("width", feedBoxWidth),
        ...getStyleValue("top", feedBoxTop),
        ...getStyleValue("right", feedBoxRight),
        ...getStyleValue("bottom", feedBoxBottom),
        ...getStyleValue("left", feedBoxLeft),
        ...getStyleValue("backgroundColor", feedBoxBackgroundColor),
      };
    }, [
      feedBoxHeight,
      feedBoxWidth,
      feedBoxTop,
      feedBoxRight,
      feedBoxBottom,
      feedBoxLeft,
      feedBoxBackgroundColor,
    ]);

    return <View style={[styles.feedbox, feedBoxStyle]} />;
  }
);

const styles = StyleSheet.create({
  feedbox: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.turquoise,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default FeedBox;
