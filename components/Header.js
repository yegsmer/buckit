import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import HeaderBox from "./HeaderBox";
import LogoItBoxIcon from "./LogoItBoxIcon";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Header = memo(
  ({
    logoItBox,
    headerTop,
    headerLeft,
    headerWidth,
    headerHeight,
    headerRight,
    headerBottom,
  }) => {
    const headerStyle = useMemo(() => {
      return {
        ...getStyleValue("top", headerTop),
        ...getStyleValue("left", headerLeft),
        ...getStyleValue("width", headerWidth),
        ...getStyleValue("height", headerHeight),
        ...getStyleValue("right", headerRight),
        ...getStyleValue("bottom", headerBottom),
      };
    }, [
      headerTop,
      headerLeft,
      headerWidth,
      headerHeight,
      headerRight,
      headerBottom,
    ]);

    return (
      <View style={[styles.header, headerStyle]}>
        <HeaderBox />
        <LogoItBoxIcon logoItBox={logoItBox} />
        <Text style={[styles.it, styles.itFlexBox]}>IT</Text>
        <Text style={[styles.buck, styles.itFlexBox]}>Buck</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  itFlexBox: {
    textAlign: "right",
    color: Color.black,
    position: "absolute",
  },
  it: {
    height: "30%",
    width: "10.53%",
    top: "35%",
    left: "65%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.bubblegumSansRegular,
  },
  buck: {
    height: "100%",
    width: "52.63%",
    top: "0%",
    left: "1.84%",
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.birthstoneRegular,
  },
  header: {
    top: 0,
    left: 5,
    width: 380,
    height: 100,
    position: "absolute",
  },
});

export default Header;
