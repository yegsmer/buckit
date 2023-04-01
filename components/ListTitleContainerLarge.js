import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ListTitleContainerLarge = memo(() => {
  return (
    <View style={[styles.listtitlecontainerlarge, styles.listtitleboxPosition]}>
      <View style={[styles.listtitlebox, styles.listtitleboxPosition]} />
      <Text style={styles.explore}>Explore</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  listtitleboxPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  listtitlebox: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.turquoise,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 3,
  },
  explore: {
    height: "67.14%",
    width: "93.43%",
    top: "18.57%",
    left: "3.71%",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  listtitlecontainerlarge: {
    height: "70%",
    top: "15%",
    bottom: "15%",
  },
});

export default ListTitleContainerLarge;
