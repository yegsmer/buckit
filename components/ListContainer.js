import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ListContainer = memo(() => {
  return <View style={styles.listcontainer} />;
});

const styles = StyleSheet.create({
  listcontainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.black,
  },
});

export default ListContainer;
