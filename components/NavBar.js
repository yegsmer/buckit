import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import NavBox from "./NavBox";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

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
    onNavButtonPress,
    newPageLeft,
    onNavButtonPress1,
    onNavButtonPress2,
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

    const newPageStyle = useMemo(() => {
      return {
        ...getStyleValue("left", newPageLeft),
      };
    }, [newPageLeft]);

    return (
      <View style={[styles.navbar, navBarStyle]}>
        <NavBox />
        <Pressable
          style={[styles.navbutton, styles.navbuttonPosition]}
          onPress={onNavButtonPress}
        >
          <Image
            style={styles.navbuttonChild}
            contentFit="cover"
            source={ellipse2}
          />
          <Text style={[styles.newpage, styles.newpageTypo, newPageStyle]}>
            {newPage}
          </Text>
        </Pressable>
        <Pressable style={styles.navbutton1} onPress={onNavButtonPress1}>
          <Image
            style={styles.navbuttonChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage1, styles.newpageTypo]}>Settings</Text>
        </Pressable>
        <Pressable
          style={[styles.navbutton2, styles.navbuttonPosition]}
          onPress={onNavButtonPress2}
        >
          <Image
            style={styles.navbuttonChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage2, styles.newpageTypo]}>{newPage1}</Text>
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  navbuttonPosition: {
    bottom: "25.81%",
    top: "25.81%",
    width: "26.32%",
    height: "48.39%",
    position: "absolute",
  },
  newpageTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_5xl,
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
    left: "24%",
    top: "26.67%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_5xl,
  },
  navbutton: {
    right: "70%",
    left: "3.68%",
  },
  newpage1: {
    height: "45%",
    width: "71%",
    top: "28.33%",
    left: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navbutton1: {
    top: 32,
    left: 140,
    width: 100,
    height: 60,
    position: "absolute",
  },
  newpage2: {
    left: "20%",
    top: "26.67%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_5xl,
  },
  navbutton2: {
    right: "3.68%",
    left: "70%",
  },
  navbar: {
    width: 380,
    height: 124,
    marginTop: 20,
  },
});

export default NavBar;
