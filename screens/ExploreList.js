import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ContentInnerContainer from "../components/ContentInnerContainer";
import ListContainerLow from "../components/ListContainerLow";
import ContentHeaderContainer from "../components/ContentHeaderContainer";
import TwoOptionSlider from "../components/TwoOptionSlider";
import TrackCompletionButton from "../components/TrackCompletionButton";
import TrackToggleButton from "../components/TrackToggleButton";
import ListTitleContainerSmall from "../components/ListTitleContainerSmall";
import BackArrowFrame1 from "../components/BackArrowFrame1";
import NavBar from "../components/NavBar";
import { Color, Padding } from "../GlobalStyles";

const ExploreList = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.explorelist, styles.iconLayout]}>
      <Header
        headerTop="unset"
        headerLeft="unset"
        headerWidth={380}
        headerHeight={100}
        headerRight="unset"
        headerBottom="unset"
      />
      <View style={styles.explorelistcontentcontainer}>
        <ContentInnerContainer />
        <ListContainerLow />
        <View style={styles.exploreheaderboxtwooption}>
          <ContentHeaderContainer />
          <TwoOptionSlider
            twoOptionSliderHeight="38.24%"
            twoOptionSliderTop="61.76%"
            twoOptionSliderRight="2.86%"
            twoOptionSliderBottom="0%"
            twoOptionSliderLeft="51.43%"
            ellipse3={require("../assets/ellipse-3.png")}
            newsFeed="Nominees"
            badges="Winners"
          />
          <TrackCompletionButton />
          <TrackToggleButton onTrackToggleButtonPress={() => {}} />
          <ListTitleContainerSmall explore="Best Pictures: All" />
          <Pressable
            style={styles.backarrow}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/backarrow1.png")}
            />
          </Pressable>
          <BackArrowFrame1
            onBackArrowFramePress={() => navigation.goBack()}
            backArrowFrameTop="12.35%"
            backArrowFrameBottom="52.94%"
            backArrowFrameHeight="34.71%"
            icon={require("../assets/backarrowframe1.png")}
          />
        </View>
      </View>
      <NavBar
        newPage="Home"
        ellipse2={require("../assets/ellipse-2.png")}
        newPage1="Profile"
        onNavButtonPress={() => navigation.navigate("Home")}
        onNavButtonPress1={() => navigation.navigate("Settings")}
        onNavButtonPress2={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  backarrow: {
    left: "2.29%",
    top: "28.82%",
    right: "76.28%",
    bottom: "70.29%",
    width: "21.43%",
    height: "0.89%",
    position: "absolute",
  },
  exploreheaderboxtwooption: {
    height: "29.31%",
    width: "97.22%",
    top: "0%",
    right: "1.39%",
    bottom: "70.69%",
    left: "1.39%",
    position: "absolute",
  },
  explorelistcontentcontainer: {
    width: 360,
    height: 580,
    marginTop: 20,
  },
  explorelist: {
    backgroundColor: Color.white,
    flex: 1,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default ExploreList;
