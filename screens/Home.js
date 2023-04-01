import * as React from "react";
import { StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import ContentInnerContainer from "../components/ContentInnerContainer";
import HomeFeedTracked from "../components/HomeFeedTracked";
import FeedBox from "../components/FeedBox";
import EventListBox from "../components/EventListBox";
import Header from "../components/Header";
import { Color } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <NavBar
        newPage="Profile"
        ellipse2={require("../assets/ellipse-2.png")}
        newPage1="Explore"
      />
      <View style={styles.homecontentcontainer}>
        <ContentInnerContainer />
        <HomeFeedTracked />
        <View style={styles.homefeedevents}>
          <FeedBox
            feedBoxHeight={280}
            feedBoxWidth={350}
            feedBoxTop={0}
            feedBoxRight="unset"
            feedBoxBottom="unset"
            feedBoxLeft={0}
            feedBoxBackgroundColor="#f4d152"
          />
          <EventListBox friendEvent={`{User} completed {List_name} list`} />
          <EventListBox
            eventListBoxTop="22.86%"
            eventListBoxBottom="61.43%"
            eventListBoxHeight="15.71%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="42.14%"
            eventListBoxBottom="42.14%"
            eventListBoxHeight="15.71%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="61.43%"
            eventListBoxBottom="22.86%"
            eventListBoxHeight="15.71%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="80.71%"
            eventListBoxBottom="3.57%"
            eventListBoxHeight="15.71%"
            friendEvent={`{User} completed {List_name} list`}
          />
        </View>
      </View>
      <Header logoItBox={require("../assets/logoitbox.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  homefeedevents: {
    height: "48.28%",
    width: "97.22%",
    top: "0.86%",
    right: "1.39%",
    bottom: "50.86%",
    left: "1.39%",
    position: "absolute",
  },
  homecontentcontainer: {
    top: 120,
    left: 15,
    width: 360,
    height: 580,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Home;
