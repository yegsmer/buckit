import React, { useMemo, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EventBox = memo(({ eventBoxBorderColor, eventBoxBorderWidth }) => {
  const eventBoxStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", eventBoxBorderColor),
      ...getStyleValue("borderWidth", eventBoxBorderWidth),
    };
  }, [eventBoxBorderColor, eventBoxBorderWidth]);

  return <View style={[styles.eventbox, eventBoxStyle]} />;
});

const styles = StyleSheet.create({
  eventbox: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default EventBox;
