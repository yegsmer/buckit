import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const HeaderBox = memo(() => {
  return <View style={styles.headerbox} />;
});

const styles = StyleSheet.create({
  headerbox: {
    position: "absolute",
    marginTop: -49.5,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    backgroundColor: Color.white,
    height: 100,
  },
});

export default HeaderBox;
