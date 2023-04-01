import * as React from "react";
import { StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import ContentInnerContainer from "../components/ContentInnerContainer";
import ListContainerLow from "../components/ListContainerLow";
import ContentHeaderContainer from "../components/ContentHeaderContainer";
import TwoOptionSlider from "../components/TwoOptionSlider";
import TrackCompletionButton from "../components/TrackCompletionButton";
import TrackToggleButton from "../components/TrackToggleButton";
import ListTitleContainerSmall from "../components/ListTitleContainerSmall";
import BackArrowIcon from "../components/BackArrowIcon";
import Header from "../components/Header";
import { Color } from "../GlobalStyles";

const ExploreList = () => {
  return (
    <View style={styles.explorelist}>
      <NavBar
        newPage="Home"
        ellipse2={require("../assets/ellipse-2.png")}
        newPage1="Profile"
        navBarTop={720}
        navBarLeft={5}
        navBarWidth={380}
        navBarHeight={124}
        navBarRight="unset"
        navBarBottom="unset"
      />
      <View style={styles.explorelistcontentcontainer}>
        <ContentInnerContainer />
        <ListContainerLow />
        <View style={styles.exploreheaderboxtwooption}>
          <ContentHeaderContainer />
          <TwoOptionSlider />
          <TrackCompletionButton />
          <TrackToggleButton onTrackToggleButtonPress={() => {}} />
          <ListTitleContainerSmall explore="Best Pictures: All" />
          <BackArrowIcon
            backArrow={require("../assets/backarrow1.png")}
            backArrowHeight="38.67%"
            backArrowTop="12.04%"
            backArrowRight="75.13%"
            backArrowBottom="49.29%"
            backArrowLeft="1.14%"
          />
        </View>
      </View>
      <Header
        logoItBox={require("../assets/logoitbox.png")}
        headerTop={0}
        headerLeft={5}
        headerWidth={380}
        headerHeight={100}
        headerRight="unset"
        headerBottom="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: 120,
    left: 15,
    width: 360,
    height: 580,
    position: "absolute",
  },
  explorelist: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ExploreList;
