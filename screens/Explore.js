import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ContentInnerContainer from "../components/ContentInnerContainer";
import ContentHeaderContainer from "../components/ContentHeaderContainer";
import ListTitleContainerLarge from "../components/ListTitleContainerLarge";
import NavBar from "../components/NavBar";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Explore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.explore}>
      <Header
        headerTop="unset"
        headerLeft="unset"
        headerWidth="unset"
        headerHeight="unset"
        headerRight="unset"
        headerBottom="unset"
      />
      <View style={styles.explorecontentcontainer}>
        <ContentInnerContainer />
        <View
          style={[styles.exploreheaderboxlarge, styles.listcontainerPosition]}
        >
          <ContentHeaderContainer
            contentHeaderContainerHeight="100%"
            contentHeaderContainerBottom="0%"
          />
          <ListTitleContainerLarge />
        </View>
        <View style={[styles.listcontainer, styles.listcontainerPosition]}>
          <View style={[styles.listcontainer1, styles.listcontainer1Bg]} />
          <View
            style={[styles.buttonsverticalscrollview, styles.listcontainer1Bg]}
          >
            <View style={[styles.visiblebuttonview, styles.listcontainer1Bg]}>
              <Pressable
                style={[styles.categoryicon, styles.literaturePosition]}
                onPress={() => navigation.navigate("ExploreMid")}
              >
                <Image
                  style={[
                    styles.categoryiconChild,
                    styles.listcontainer1Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <Text style={styles.movies}>Movies</Text>
              </Pressable>
              <Pressable
                style={[styles.literature, styles.categoryiconPosition3]}
                onPress={() => navigation.navigate("ExploreMid")}
              >
                <Image
                  style={[
                    styles.categoryiconChild,
                    styles.listcontainer1Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <Text style={styles.movies}>Literature</Text>
              </Pressable>
              <Pressable
                style={[styles.categoryicon1, styles.categoryiconPosition2]}
                onPress={() => navigation.navigate("ExploreMid")}
              >
                <Image
                  style={[
                    styles.categoryiconChild,
                    styles.listcontainer1Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <Text style={styles.movies}>Drink</Text>
              </Pressable>
              <Pressable
                style={[styles.categoryicon2, styles.categoryiconPosition2]}
                onPress={() => navigation.navigate("ExploreMid")}
              >
                <Image
                  style={[
                    styles.categoryiconChild,
                    styles.listcontainer1Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <Text style={styles.movies}>Food</Text>
              </Pressable>
              <View
                style={[styles.categoryicon3, styles.categoryiconPosition1]}
              >
                <Image
                  style={[
                    styles.categoryiconChild,
                    styles.listcontainer1Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <Text style={styles.movies}>Restaurants</Text>
              </View>
              <View
                style={[styles.categoryicon4, styles.categoryiconPosition1]}
              >
                <Image
                  style={[
                    styles.categoryiconChild,
                    styles.listcontainer1Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <Text style={styles.movies}>Restaurants</Text>
              </View>
              <Pressable
                style={[styles.categoryicon5, styles.categoryiconPosition]}
                onPress={() => navigation.navigate("ExploreMid")}
              >
                <Image
                  style={[
                    styles.categoryiconChild,
                    styles.listcontainer1Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <Text style={styles.movies}>Televisions</Text>
              </Pressable>
              <Pressable
                style={[styles.categoryicon6, styles.categoryiconPosition]}
                onPress={() => navigation.navigate("ExploreMid")}
              >
                <Image
                  style={[
                    styles.categoryiconChild,
                    styles.listcontainer1Position,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <Text style={styles.movies}>Travel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <NavBar
        newPage="Home"
        ellipse2={require("../assets/ellipse-2.png")}
        newPage1="Profile"
        navBarTop="unset"
        navBarLeft="unset"
        navBarWidth={380}
        navBarHeight={124}
        navBarRight="unset"
        navBarBottom="unset"
        onNavButtonPress={() => navigation.navigate("Home")}
        newPageLeft="24%"
        onNavButtonPress1={() => navigation.navigate("Settings")}
        onNavButtonPress2={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listcontainerPosition: {
    left: "1.39%",
    right: "1.39%",
    width: "97.22%",
    position: "absolute",
  },
  listcontainer1Bg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  literaturePosition: {
    bottom: "78.15%",
    width: "40.37%",
    height: "21.85%",
    top: "0%",
    position: "absolute",
  },
  listcontainer1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
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
    width: "40.37%",
    height: "21.85%",
    bottom: "0%",
    position: "absolute",
  },
  categoryiconPosition: {
    bottom: "52.1%",
    top: "26.05%",
    width: "40.37%",
    height: "21.85%",
    position: "absolute",
  },
  exploreheaderboxlarge: {
    height: "17.24%",
    bottom: "82.76%",
    top: "0%",
    right: "1.39%",
    width: "97.22%",
  },
  listcontainer1: {
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  categoryiconChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
  },
  categoryicon: {
    right: "59.63%",
    left: "0%",
  },
  literature: {
    bottom: "78.15%",
    width: "40.37%",
    height: "21.85%",
    top: "0%",
    position: "absolute",
  },
  categoryicon1: {
    right: "59.63%",
    left: "0%",
  },
  categoryicon2: {
    left: "59.63%",
    right: "0%",
  },
  categoryicon3: {
    right: "59.63%",
    left: "0%",
  },
  categoryicon4: {
    left: "59.63%",
    right: "0%",
  },
  categoryicon5: {
    right: "59.63%",
    left: "0%",
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
    top: "17.24%",
    bottom: "1.72%",
    right: "1.39%",
    width: "97.22%",
    overflow: "hidden",
  },
  explorecontentcontainer: {
    alignSelf: "stretch",
    height: 580,
    marginTop: 20,
  },
  explore: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Explore;
