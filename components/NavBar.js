import React, { useMemo, memo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import NavBox from "./NavBox";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NavBar = memo(
  ({
    newPage,
    ellipse2,
    newPage1,
    navBarTop,
    navBarLeft,
    navBarWidth,
    navBarHeight,
    navBarRight,
    navBarBottom,
  }) => {
    const navBarStyle = useMemo(() => {
      return {
        ...getStyleValue("top", navBarTop),
        ...getStyleValue("left", navBarLeft),
        ...getStyleValue("width", navBarWidth),
        ...getStyleValue("height", navBarHeight),
        ...getStyleValue("right", navBarRight),
        ...getStyleValue("bottom", navBarBottom),
      };
    }, [
      navBarTop,
      navBarLeft,
      navBarWidth,
      navBarHeight,
      navBarRight,
      navBarBottom,
    ]);

    return (
      <View style={[styles.navbar, navBarStyle]}>
        <NavBox />
        <View style={[styles.navbutton, styles.navbuttonPosition]}>
          <Image
            style={styles.navbuttonChild}
            resizeMode="cover"
            source={ellipse2}
          />
          <Text style={styles.newpage}>{newPage}</Text>
        </View>
        <View style={[styles.navbutton1, styles.navbuttonPosition]}>
          <Image
            style={styles.navbuttonChild}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.newpage}>{newPage1}</Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  navbuttonPosition: {
    bottom: "19.35%",
    top: "8.06%",
    width: "36.84%",
    height: "72.58%",
    position: "absolute",
  },
  navbuttonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  newpage: {
    height: "33.33%",
    width: "71.43%",
    top: "33.33%",
    left: "14.29%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  navbutton: {
    right: "57.89%",
    left: "5.26%",
  },
  navbutton1: {
    right: "7.89%",
    left: "55.26%",
  },
  navbar: {
    top: 720,
    left: 5,
    width: 380,
    height: 124,
    position: "absolute",
  },
});

export default NavBar;
