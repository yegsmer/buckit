import * as React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ContentInnerContainer from "../components/ContentInnerContainer";
import ListContainerLow from "../components/ListContainerLow";
import ContentHeaderContainer from "../components/ContentHeaderContainer";
import ThreeOptionSlider from "../components/ThreeOptionSlider";
import TrackToggleButton from "../components/TrackToggleButton";
import ListTitleContainerSmall from "../components/ListTitleContainerSmall";
import BackArrowIcon from "../components/BackArrowIcon";
import NavBar from "../components/NavBar";
import { Color } from "../GlobalStyles";

const ExploreLow = () => {
  return (
    <View style={styles.explorelow}>
      <Header
        logoItBox={`https://d1xzdqg8s8ggsr.cloudfront.net/641f40f45e339deadf1d2973/ae184c1f-4283-4d3c-825d-157a61c8a24b_1679976316790554239?Expires=-62135596800&Signature=dOqfBpzfk9EJ4RBPl8nJw7IZ7aeDOXzqbFAuGRn6rVIAaeTkdcFNFMsrtDtw8OmbXouD~PeoSJTMqYSywtSlZX0NaakDUXMjFDJIXBW6bFuM5nLTz~GTdY4nJ5L7xIGgLwgJ7KWkc9mRhPOIpm1~ESbdYH48xJbT2w9x6Es6LUspw7AWcNwUQMvRjN9JGYGR8hlYvGcNmkkmlh92N6ntnSZ4hw4MJBPIoQw7MbU2s1kNGjwU8ZaLecXVBmv4FvWBCBFRQ6N~lyIfaeCM2EOo8EJdigYyCaCw-Gm1o9AiTlDYlsHYeg1Zsa2iIRW~pJXnromnlB1OSwq9hHNsBAjh8g__&Key-Pair-Id=K1P54FZWCHCL6J`}
        headerTop={0}
        headerLeft={5}
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
          <ThreeOptionSlider />
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
          <BackArrowIcon
            backArrow={require("../assets/backarrow1.png")}
            backArrowHeight="38.62%"
            backArrowTop="12.03%"
            backArrowRight="75.13%"
            backArrowBottom="49.35%"
            backArrowLeft="1.14%"
          />
        </View>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: 120,
    left: 15,
    width: 360,
    height: 580,
    position: "absolute",
  },
  explorelow: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ExploreLow;
