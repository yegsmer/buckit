import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ContentInnerContainer = memo(() => {
  return <View style={styles.contentinnercontainer} />;
});

const styles = StyleSheet.create({
  contentinnercontainer: {
    position: "absolute",
    height: "103.45%",
    width: "105.56%",
    top: "-1.72%",
    right: "-2.78%",
    bottom: "-1.72%",
    left: "-2.78%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 10,
  },
});

export default ContentInnerContainer;
