import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CategoryIcon = memo(
  ({
    categoryIconRight,
    categoryIconLeft,
    iconTitle,
    categoryIconTop,
    categoryIconBottom,
    ellipse10,
  }) => {
    const categoryIconStyle = useMemo(() => {
      return {
        ...getStyleValue("right", categoryIconRight),
        ...getStyleValue("left", categoryIconLeft),
        ...getStyleValue("top", categoryIconTop),
        ...getStyleValue("bottom", categoryIconBottom),
      };
    }, [
      categoryIconRight,
      categoryIconLeft,
      categoryIconTop,
      categoryIconBottom,
    ]);

    const navigation = useNavigation();

    return (
      <Pressable
        style={[styles.categoryicon, categoryIconStyle]}
        onPress={() => navigation.navigate("ExploreLow")}
      >
        <Image
          style={styles.categoryiconChild}
          contentFit="cover"
          source={ellipse10}
        />
        <Text style={styles.icontitle}>{iconTitle}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  categoryiconChild: {
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
  icontitle: {
    height: "30.77%",
    width: "92.31%",
    top: "34.62%",
    left: "3.85%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  categoryicon: {
    height: "27.66%",
    width: "37.14%",
    top: "4.89%",
    right: "57.14%",
    bottom: "67.45%",
    left: "5.71%",
    position: "absolute",
  },
});

export default CategoryIcon;
