import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const LogoItBoxIcon = memo(() => {
  return (
    <Image
      style={styles.logoitboxIcon}
      contentFit="cover"
      source={require("../assets/logoitbox.png")}
    />
  );
});

const styles = StyleSheet.create({
  logoitboxIcon: {
    position: "absolute",
    marginTop: -26.42,
    width: "52.63%",
    top: "50%",
    right: "-10%",
    left: "57.37%",
    borderRadius: Border.br_mini,
    maxWidth: "100%",
    overflow: "hidden",
    height: 80,
  },
});

export default LogoItBoxIcon;
