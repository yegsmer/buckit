import React, { memo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import ListContainer from "./ListContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CategoryListContainer = memo(({ ellipse10 }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.listcontainer}>
      <ListContainer />
      <View
        style={[styles.buttonsverticalscrollview, styles.visiblebuttonviewBg]}
      >
        <View style={[styles.visiblebuttonview, styles.visiblebuttonviewBg]}>
          <Pressable
            style={[styles.categoryicon, styles.categoryiconPosition4]}
            onPress={() => navigation.navigate("ExploreLow")}
          >
            <Image
              style={styles.categoryiconChild}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={styles.movies}>Awards</Text>
          </Pressable>
          <Pressable
            style={[styles.literature, styles.categoryiconPosition3]}
            onPress={() => navigation.navigate("ExploreLow")}
          >
            <Image
              style={styles.categoryiconChild}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={styles.movies}>Festivals</Text>
          </Pressable>
          <Pressable
            style={[styles.categoryicon1, styles.categoryiconPosition2]}
            onPress={() => navigation.navigate("ExploreLow")}
          >
            <Image
              style={styles.categoryiconChild}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={styles.movies}>Best Ever</Text>
          </Pressable>
          <Pressable
            style={[styles.categoryicon2, styles.categoryiconPosition2]}
            onPress={() => navigation.navigate("ExploreLow")}
          >
            <Image
              style={styles.categoryiconChild}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={styles.movies}>Box Office</Text>
          </Pressable>
          <View style={[styles.categoryicon3, styles.categoryiconPosition1]}>
            <Image
              style={styles.categoryiconChild}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={styles.movies}>Restaurants</Text>
          </View>
          <View style={[styles.categoryicon4, styles.categoryiconPosition1]}>
            <Image
              style={styles.categoryiconChild}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={styles.movies}>Restaurants</Text>
          </View>
          <Pressable
            style={[styles.categoryicon5, styles.categoryiconPosition]}
            onPress={() => navigation.navigate("ExploreLow")}
          >
            <Image
              style={styles.categoryiconChild}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={styles.movies}>By Individual</Text>
          </Pressable>
          <Pressable
            style={[styles.categoryicon6, styles.categoryiconPosition]}
            onPress={() => navigation.navigate("ExploreLow")}
          >
            <Image
              style={styles.categoryiconChild}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={styles.movies}>By Series</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  visiblebuttonviewBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  categoryiconPosition4: {
    left: "0%",
    right: "59.63%",
  },
  categoryiconPosition3: {
    left: "59.63%",
    right: "0%",
  },
  categoryiconPosition2: {
    bottom: "26.05%",
    top: "52.1%",
    width: "40.37%",
    height: "21.85%",
    position: "absolute",
  },
  categoryiconPosition1: {
    top: "78.15%",
    bottom: "0%",
    width: "40.37%",
    height: "21.85%",
    position: "absolute",
  },
  categoryiconPosition: {
    bottom: "52.1%",
    top: "26.05%",
    width: "40.37%",
    height: "21.85%",
    position: "absolute",
  },
  categoryiconChild: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  movies: {
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
    bottom: "78.15%",
    top: "0%",
    width: "40.37%",
    height: "21.85%",
    position: "absolute",
  },
  literature: {
    bottom: "78.15%",
    top: "0%",
    width: "40.37%",
    height: "21.85%",
    position: "absolute",
  },
  categoryicon1: {
    left: "0%",
    right: "59.63%",
  },
  categoryicon2: {
    left: "59.63%",
    right: "0%",
  },
  categoryicon3: {
    left: "0%",
    right: "59.63%",
  },
  categoryicon4: {
    left: "59.63%",
    right: "0%",
  },
  categoryicon5: {
    left: "0%",
    right: "59.63%",
  },
  categoryicon6: {
    left: "59.63%",
    right: "0%",
  },
  visiblebuttonview: {
    top: 0,
    left: 0,
    width: 322,
    height: 595,
  },
  buttonsverticalscrollview: {
    height: "96.17%",
    width: "92%",
    top: "1.91%",
    right: "4%",
    bottom: "1.91%",
    left: "4%",
  },
  listcontainer: {
    height: "81.03%",
    width: "97.22%",
    top: "17.24%",
    right: "1.39%",
    bottom: "1.72%",
    left: "1.39%",
    overflow: "hidden",
    position: "absolute",
  },
});

export default CategoryListContainer;
