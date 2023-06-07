import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import FeedBox from "../components/FeedBox";
import EventListBox from "../components/EventListBox";
import HomeFeedTracked from "../components/HomeFeedTracked";
import NavBar from "../components/NavBar";
import { Color, Border, Padding } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeBg]}>
      <Header />
      <View style={[styles.homecontentcontainer, styles.homeBg]}>
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
        <HomeFeedTracked />
      </View>
      <NavBar
        newPage="Explore"
        ellipse2={require("../assets/ellipse-2.png")}
        newPage1="Profile"
        navBarTop="unset"
        navBarLeft="unset"
        navBarWidth={380}
        navBarHeight={124}
        navBarRight="unset"
        navBarBottom="unset"
        onNavButtonPress={() => navigation.navigate("Explore")}
        newPageLeft="15%"
        onNavButtonPress1={() => navigation.navigate("Settings")}
        onNavButtonPress2={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeBg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  homefeedevents: {
    alignSelf: "stretch",
    height: 280,
  },
  homecontentcontainer: {
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 10,
    width: 380,
    paddingHorizontal: Padding.p_8xs,
    paddingBottom: Padding.p_8xs,
    justifyContent: "flex-end",
    marginTop: 20,
  },
  home: {
    flex: 1,
    width: "100%",
    height: 844,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default Home;
