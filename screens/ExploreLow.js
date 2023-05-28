import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ContentInnerContainer from "../components/ContentInnerContainer";
import ListContainerLow from "../components/ListContainerLow";
import ContentHeaderContainer from "../components/ContentHeaderContainer";
import TrackToggleButton from "../components/TrackToggleButton";
import ListTitleContainerSmall from "../components/ListTitleContainerSmall";
import BackArrowFrame1 from "../components/BackArrowFrame1";
import NavBar from "../components/NavBar";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ExploreLow = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.explorelow}>
      <Header
        headerTop="unset"
        headerLeft="unset"
        headerWidth={380}
        headerHeight={100}
        headerRight="unset"
        headerBottom="unset"
      />
      <View style={styles.explorelowcontentcontainer}>
        <ContentInnerContainer />
        <ListContainerLow />
        <View style={styles.exploreheaderboxthreeoption}>
          <ContentHeaderContainer
            contentHeaderContainerHeight="99.89%"
            contentHeaderContainerBottom="0.11%"
          />
          <View style={styles.threeoptionslider}>
            <View style={styles.threeoptionsliderChild} />
            <Image
              style={styles.threeoptionsliderItem}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Text style={[styles.newsFeed, styles.newsFlexBox]}>Year</Text>
            <Text style={[styles.newsFeed1, styles.newsFlexBox]}>Decade</Text>
            <Text style={[styles.badges, styles.newsFlexBox]}>All</Text>
            <Image
              style={[styles.threeoptionsliderInner, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-91.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-91.png")}
            />
          </View>
          <TrackToggleButton
            onTrackToggleButtonPress={() => {}}
            trackToggleButtonTop="58.76%"
            trackToggleButtonBottom="-16.34%"
            trackToggleButtonHeight="57.58%"
          />
          <ListTitleContainerSmall
            listTitleContainerSmallHeight="41.13%"
            listTitleContainerSmallTop="8.81%"
            listTitleContainerSmallBottom="50.06%"
            explore="Best Pictures"
          />
          <BackArrowFrame1
            onBackArrowFramePress={() => navigation.goBack()}
            icon={require("../assets/backarrowframe1.png")}
          />
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
  newsFlexBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    width: "29.75%",
    height: "18.7%",
    position: "absolute",
    alignItems: "center",
  },
  ellipseIconLayout: {
    bottom: "45.59%",
    top: "7.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "20.66%",
    height: "46.74%",
    position: "absolute",
    overflow: "hidden",
  },
  threeoptionsliderChild: {
    height: "76.77%",
    width: "99.17%",
    top: "-7.67%",
    right: "0.83%",
    bottom: "30.9%",
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 5,
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  threeoptionsliderItem: {
    top: "7.79%",
    right: "75.21%",
    bottom: "45.47%",
    left: "4.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "20.66%",
    height: "46.74%",
    position: "absolute",
    overflow: "hidden",
  },
  newsFeed: {
    left: "70.25%",
    top: "81.3%",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    width: "29.75%",
    height: "18.7%",
  },
  newsFeed1: {
    left: "34.71%",
    top: "81.3%",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    width: "29.75%",
    height: "18.7%",
  },
  badges: {
    top: "81.02%",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    width: "29.75%",
    height: "18.7%",
    left: "0%",
  },
  threeoptionsliderInner: {
    right: "4.55%",
    left: "74.79%",
  },
  ellipseIcon: {
    right: "40.08%",
    left: "39.26%",
  },
  threeoptionslider: {
    height: "38.3%",
    width: "69.14%",
    top: "61.7%",
    right: "2.86%",
    bottom: "0%",
    left: "28%",
    position: "absolute",
  },
  exploreheaderboxthreeoption: {
    height: "29.34%",
    width: "97.22%",
    top: "0%",
    right: "1.39%",
    bottom: "70.66%",
    left: "1.39%",
    position: "absolute",
  },
  explorelowcontentcontainer: {
    width: 360,
    height: 580,
    marginTop: 20,
  },
  explorelow: {
    flex: 1,
    width: "100%",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ExploreLow;
