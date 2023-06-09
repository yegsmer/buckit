import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ContentInnerContainer = memo(() => {
  return <View style={styles.contentinnercontainer} />;
});

const styles = StyleSheet.create({
  contentinnercontainer: {
    position: "absolute",
    height: "100%",
    width: "99.48%",
    top: "0%",
    right: "0.26%",
    bottom: "0%",
    left: "0.26%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 10,
  },
});

export default ContentInnerContainer;
