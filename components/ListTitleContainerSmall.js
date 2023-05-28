import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ListTitleContainerSmall = memo(
  ({
    listTitleContainerSmallHeight,
    listTitleContainerSmallTop,
    listTitleContainerSmallBottom,
    explore,
  }) => {
    const listTitleContainerSmallStyle = useMemo(() => {
      return {
        ...getStyleValue("height", listTitleContainerSmallHeight),
        ...getStyleValue("top", listTitleContainerSmallTop),
        ...getStyleValue("bottom", listTitleContainerSmallBottom),
      };
    }, [
      listTitleContainerSmallHeight,
      listTitleContainerSmallTop,
      listTitleContainerSmallBottom,
    ]);

    return (
      <View
        style={[styles.listtitlecontainersmall, listTitleContainerSmallStyle]}
      >
        <View style={styles.listtitlebox} />
        <Text style={styles.explore}>{explore}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  listtitlebox: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.turquoise,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 3,
    position: "absolute",
  },
  explore: {
    height: "67.14%",
    width: "90.4%",
    top: "18.57%",
    left: "3.6%",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  listtitlecontainersmall: {
    height: "41.18%",
    width: "71.43%",
    top: "8.82%",
    right: "2.86%",
    bottom: "50%",
    left: "25.71%",
    position: "absolute",
  },
});

export default ListTitleContainerSmall;
