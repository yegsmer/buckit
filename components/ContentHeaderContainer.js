import React, { useMemo, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContentHeaderContainer = memo(
  ({ contentHeaderContainerHeight, contentHeaderContainerBottom }) => {
    const contentHeaderContainerStyle = useMemo(() => {
      return {
        ...getStyleValue("height", contentHeaderContainerHeight),
        ...getStyleValue("bottom", contentHeaderContainerBottom),
      };
    }, [contentHeaderContainerHeight, contentHeaderContainerBottom]);

    return (
      <View
        style={[styles.contentheadercontainer, contentHeaderContainerStyle]}
      />
    );
  }
);

const styles = StyleSheet.create({
  contentheadercontainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
  },
});

export default ContentHeaderContainer;
