import React, { useMemo, memo } from "react";
import { Pressable, Image, StyleSheet } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TrackToggleButton = memo(
  ({
    onTrackToggleButtonPress,
    trackToggleButtonTop,
    trackToggleButtonBottom,
    trackToggleButtonHeight,
  }) => {
    const trackToggleButtonStyle = useMemo(() => {
      return {
        ...getStyleValue("top", trackToggleButtonTop),
        ...getStyleValue("bottom", trackToggleButtonBottom),
        ...getStyleValue("height", trackToggleButtonHeight),
      };
    }, [
      trackToggleButtonTop,
      trackToggleButtonBottom,
      trackToggleButtonHeight,
    ]);

    return (
      <Pressable
        style={[styles.tracktogglebutton, trackToggleButtonStyle]}
        onPress={onTrackToggleButtonPress}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/tracktogglebutton.png")}
        />
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  tracktogglebutton: {
    position: "absolute",
    left: "1.14%",
    top: "58.82%",
    right: "76.57%",
    bottom: "-16.47%",
    width: "22.29%",
    height: "57.65%",
  },
});

export default TrackToggleButton;
