import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BackArrowFrame1 = ({
  onBackArrowFramePress,
  backArrowFrameTop,
  backArrowFrameBottom,
  backArrowFrameHeight,
  icon,
}) => {
  const backArrowFrameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", backArrowFrameTop),
      ...getStyleValue("bottom", backArrowFrameBottom),
      ...getStyleValue("height", backArrowFrameHeight),
    };
  }, [backArrowFrameTop, backArrowFrameBottom, backArrowFrameHeight]);

  return (
    <Pressable
      style={[styles.backarrowframe, backArrowFrameStyle]}
      onPress={onBackArrowFramePress}
    >
      <Image style={styles.icon} contentFit="cover" source={icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  backarrowframe: {
    position: "absolute",
    left: "0%",
    top: "12.34%",
    right: "78.57%",
    bottom: "52.99%",
    width: "21.43%",
    height: "34.67%",
  },
});

export default BackArrowFrame1;
