import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import HeaderBox from "./HeaderBox";
import LogoItBoxIcon from "./LogoItBoxIcon";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Header = memo(
  ({
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
        <LogoItBoxIcon />
        <Text style={[styles.it, styles.itPosition]}>IT</Text>
        <Text style={[styles.buck, styles.itPosition]}>Buck</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  itPosition: {
    textAlign: "right",
    color: Color.black,
    top: "50%",
    position: "absolute",
  },
  it: {
    marginTop: -14.5,
    left: "66.55%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.bubblegumSansRegular,
  },
  buck: {
    marginTop: -49.5,
    left: "16.01%",
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.birthstoneRegular,
  },
  header: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Header;
