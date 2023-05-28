import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ContentInnerContainer from "../components/ContentInnerContainer";
import ListContainer from "../components/ListContainer";
import EventListBox from "../components/EventListBox";
import BackArrowFrame1 from "../components/BackArrowFrame1";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Header
        headerTop="unset"
        headerLeft="unset"
        headerWidth="unset"
        headerHeight="unset"
        headerRight="unset"
        headerBottom="unset"
      />
      <View style={styles.settingscontentcontainer}>
        <ContentInnerContainer />
        <View
          style={[styles.settingscontainer, styles.settingscontainerPosition]}
        >
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
        <View
          style={[styles.pageheaderboxsmall, styles.settingscontainerPosition]}
        >
          <View
            style={[styles.contentheadercontainer, styles.listtitleboxPosition]}
          />
          <View style={styles.listtitlecontainersmall}>
            <View style={[styles.listtitlebox, styles.listtitleboxPosition]} />
            <Text style={[styles.explore, styles.exploreFlexBox]}>
              Settings
            </Text>
          </View>
          <BackArrowFrame1
            onBackArrowFramePress={() => navigation.goBack()}
            backArrowFrameTop="21%"
            backArrowFrameBottom="20%"
            backArrowFrameHeight="59%"
            icon={require("../assets/backarrowframe2.png")}
          />
        </View>
      </View>
      <View style={styles.navbar}>
        <View style={[styles.navbox, styles.navboxPosition]} />
        <Pressable
          style={[styles.navbutton, styles.navbuttonPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.navbuttonChild, styles.navboxPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage, styles.newpageTypo]}>Home</Text>
        </Pressable>
        <View style={styles.navbutton1}>
          <Image
            style={[styles.navbuttonChild, styles.navboxPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage1, styles.newpageTypo]}>Settings</Text>
        </View>
        <Pressable
          style={[styles.navbutton2, styles.navbuttonPosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.navbuttonChild, styles.navboxPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage2, styles.newpageTypo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingscontainerPosition: {
    left: "4.2%",
    right: "4.2%",
    width: "91.6%",
    position: "absolute",
  },
  listtitleboxPosition: {
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  exploreFlexBox: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  navboxPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  navbuttonPosition: {
    bottom: "25.81%",
    top: "25.81%",
    width: "26.32%",
    height: "48.39%",
    position: "absolute",
  },
  newpageTypo: {
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  settingscontainer: {
    height: "78.33%",
    top: "18.33%",
    bottom: "3.33%",
  },
  contentheadercontainer: {
    backgroundColor: Color.white,
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
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.bubblegumSansRegular,
    justifyContent: "center",
    display: "flex",
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
    height: "16.67%",
    top: "1.67%",
    bottom: "81.67%",
  },
  settingscontentcontainer: {
    alignSelf: "stretch",
    height: 600,
    marginTop: 5,
  },
  navbox: {
    backgroundColor: Color.white,
  },
  navbuttonChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  newpage: {
    left: "24%",
    top: "26.67%",
    color: Color.black,
    fontSize: FontSize.size_5xl,
  },
  navbutton: {
    right: "70%",
    left: "3.68%",
  },
  newpage1: {
    height: "45%",
    width: "71%",
    top: "28.33%",
    left: "15%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  navbutton1: {
    top: 32,
    left: 140,
    width: 100,
    height: 60,
    position: "absolute",
  },
  newpage2: {
    left: "20%",
    top: "26.67%",
    color: Color.black,
    fontSize: FontSize.size_5xl,
  },
  navbutton2: {
    right: "3.68%",
    left: "70%",
  },
  navbar: {
    width: 380,
    height: 124,
    marginTop: 5,
  },
  settings: {
    flex: 1,
    height: 844,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Settings;
