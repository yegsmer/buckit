import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import EventBox from "./EventBox";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const EventListBox = memo(
  ({
    eventListBoxTop,
    eventListBoxBottom,
    eventListBoxHeight,
    friendEvent,
  }) => {
    const eventListBoxStyle = useMemo(() => {
      return {
        ...getStyleValue("top", eventListBoxTop),
        ...getStyleValue("bottom", eventListBoxBottom),
        ...getStyleValue("height", eventListBoxHeight),
      };
    }, [eventListBoxTop, eventListBoxBottom, eventListBoxHeight]);

    return (
      <View style={[styles.eventlistbox, eventListBoxStyle]}>
        <EventBox />
        <Text style={styles.friendevent}>{friendEvent}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  friendevent: {
    height: "90.91%",
    width: "93.94%",
    top: "4.55%",
    left: "3.03%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  eventlistbox: {
    height: "15.71%",
    width: "94.29%",
    top: "3.57%",
    right: "2.86%",
    bottom: "80.71%",
    left: "2.86%",
    position: "absolute",
  },
});

export default EventListBox;
