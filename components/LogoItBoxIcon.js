import React, { memo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

const LogoItBoxIcon = memo(({ logoItBox }) => {
  return (
    <Image style={styles.logoitboxIcon} resizeMode="cover" source={logoItBox} />
  );
});

const styles = StyleSheet.create({
  logoitboxIcon: {
    position: "absolute",
    height: "80%",
    width: "52.63%",
    top: "23.25%",
    right: "-10.09%",
    bottom: "-3.25%",
    left: "57.46%",
    borderRadius: Border.br_mini,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
});

export default LogoItBoxIcon;
