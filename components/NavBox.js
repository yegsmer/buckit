import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const NavBox = memo(() => {
  return <View style={styles.navbox} />;
});

const styles = StyleSheet.create({
  navbox: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
  },
});

export default NavBox;
