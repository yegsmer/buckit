import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import NavBar from "../components/NavBar";
import ContentInnerContainer from "../components/ContentInnerContainer";
import ListContainer from "../components/ListContainer";
import EventListBox from "../components/EventListBox";
import BackArrowIcon from "../components/BackArrowIcon";
import Header from "../components/Header";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Settings = () => {
  return (
    <View style={styles.settings}>
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
      <View style={styles.settingscontentcontainer}>
        <ContentInnerContainer />
        <View style={styles.settingscontainer}>
          <ListContainer />
          <EventListBox
            eventListBoxTop="70.83%"
            eventListBoxBottom="20%"
            eventListBoxHeight="9.17%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="59.58%"
            eventListBoxBottom="31.25%"
            eventListBoxHeight="9.17%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="48.33%"
            eventListBoxBottom="42.5%"
            eventListBoxHeight="9.17%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="37.08%"
            eventListBoxBottom="53.75%"
            eventListBoxHeight="9.17%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="25.83%"
            eventListBoxBottom="65%"
            eventListBoxHeight="9.17%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="14.58%"
            eventListBoxBottom="76.25%"
            eventListBoxHeight="9.17%"
            friendEvent={`{User} completed {List_name} list`}
          />
          <EventListBox
            eventListBoxTop="3.33%"
            eventListBoxBottom="87.5%"
            eventListBoxHeight="9.17%"
            friendEvent={`{User} completed {List_name} list`}
          />
        </View>
        <View style={styles.pageheaderboxsmall}>
          <View
            style={[styles.contentheadercontainer, styles.listtitleboxPosition]}
          />
          <View style={styles.listtitlecontainersmall}>
            <View style={[styles.listtitlebox, styles.listtitleboxPosition]} />
            <Text style={styles.explore}>Settings</Text>
          </View>
          <BackArrowIcon backArrow={require("../assets/backarrow2.png")} />
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
  listtitleboxPosition: {
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  settingscontainer: {
    height: "81.03%",
    top: "17.24%",
    bottom: "1.72%",
    left: "1.39%",
    right: "1.39%",
    width: "97.22%",
    position: "absolute",
  },
  contentheadercontainer: {
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
  },
  listtitlebox: {
    backgroundColor: Color.turquoise,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 3,
  },
  explore: {
    height: "67.14%",
    width: "90.4%",
    top: "18.57%",
    left: "3.6%",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  listtitlecontainersmall: {
    height: "70%",
    width: "71.43%",
    top: "15%",
    right: "2.86%",
    bottom: "15%",
    left: "25.71%",
    position: "absolute",
  },
  pageheaderboxsmall: {
    height: "17.24%",
    bottom: "82.76%",
    top: "0%",
    left: "1.39%",
    right: "1.39%",
    width: "97.22%",
    position: "absolute",
  },
  settingscontentcontainer: {
    top: 120,
    left: 15,
    width: 360,
    height: 580,
    position: "absolute",
  },
  settings: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Settings;
