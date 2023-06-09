import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ContentInnerContainer from "../components/ContentInnerContainer";
import BackArrowFrame1 from "../components/BackArrowFrame1";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

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
        <View style={styles.pageheaderboxsmall}>
          <View
            style={[styles.contentheadercontainer, styles.navboxPosition]}
          />
          <View
            style={[
              styles.listtitlecontainersmall,
              styles.listtitlecontainersmallPosition,
            ]}
          >
            <View style={[styles.listtitlebox, styles.eventboxPosition]} />
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
        <Pressable
          style={styles.backarrowframe}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/backarrowframe3.png")}
          />
        </Pressable>
        <View style={styles.settingscontainer}>
          <View style={[styles.listcontainer, styles.navboxPosition]} />
          <View
            style={[
              styles.entryverticalscrollviewlarge,
              styles.listtitlecontainersmallPosition,
            ]}
          >
            <View style={styles.visibleentryverticalscrollview}>
              <View style={[styles.eventlistbox, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox1, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox2, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox3, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox4, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox5, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox6, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox7, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox8, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View style={[styles.eventlistbox9, styles.eventlistboxPosition]}>
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
              <View
                style={[styles.eventlistbox10, styles.eventlistboxPosition]}
              >
                <View style={[styles.eventbox, styles.eventboxPosition]} />
                <Text
                  style={styles.friendevent}
                >{`{User} completed {List_name} list`}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.navbar}>
        <View style={[styles.navbox, styles.navboxPosition]} />
        <Pressable
          style={[styles.navbutton, styles.navbuttonPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.navbuttonChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage, styles.newpageTypo]}>Home</Text>
        </Pressable>
        <View style={styles.navbutton1}>
          <Image
            style={[styles.navbuttonChild, styles.iconLayout]}
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
            style={[styles.navbuttonChild, styles.iconLayout]}
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
  navboxPosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  listtitlecontainersmallPosition: {
    right: "2.86%",
    position: "absolute",
  },
  eventboxPosition: {
    borderWidth: 3,
    borderStyle: "solid",
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
  eventlistboxPosition: {
    height: "7.53%",
    left: "0%",
    right: "0%",
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  newpageTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  contentheadercontainer: {
    borderRadius: Border.br_mini,
    height: "100%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  listtitlebox: {
    backgroundColor: Color.turquoise,
    borderColor: "#000",
    borderRadius: Border.br_mini,
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
    bottom: "15%",
    left: "25.71%",
  },
  pageheaderboxsmall: {
    height: "16.67%",
    width: "91.6%",
    top: "1.67%",
    right: "4.2%",
    bottom: "81.67%",
    left: "4.2%",
    position: "absolute",
  },
  backarrowframe: {
    left: "4.17%",
    top: "5.17%",
    right: "75%",
    bottom: "85%",
    width: "20.83%",
    height: "9.83%",
    position: "absolute",
  },
  listcontainer: {
    backgroundColor: Color.black,
    borderRadius: Border.br_mini,
    height: "100%",
    right: "0%",
    width: "100%",
  },
  eventbox: {
    borderRadius: Border.br_11xl,
    borderColor: "#f4d152",
    backgroundColor: Color.white,
  },
  friendevent: {
    height: "90.91%",
    width: "93.94%",
    top: "4.55%",
    left: "3.03%",
    fontSize: FontSize.size_base,
    color: Color.black,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
    alignItems: "center",
  },
  eventlistbox: {
    top: "92.47%",
    bottom: "0%",
    height: "7.53%",
  },
  eventlistbox1: {
    top: "83.22%",
    bottom: "9.25%",
  },
  eventlistbox2: {
    top: "73.97%",
    bottom: "18.49%",
  },
  eventlistbox3: {
    top: "64.73%",
    bottom: "27.74%",
  },
  eventlistbox4: {
    top: "55.48%",
    bottom: "36.99%",
  },
  eventlistbox5: {
    top: "46.23%",
    bottom: "46.23%",
  },
  eventlistbox6: {
    top: "36.99%",
    bottom: "55.48%",
  },
  eventlistbox7: {
    top: "27.74%",
    bottom: "64.73%",
  },
  eventlistbox8: {
    top: "18.49%",
    bottom: "73.97%",
  },
  eventlistbox9: {
    top: "9.25%",
    bottom: "83.22%",
  },
  eventlistbox10: {
    bottom: "92.47%",
    top: "0%",
    height: "7.53%",
  },
  visibleentryverticalscrollview: {
    top: 0,
    left: 0,
    width: 330,
    height: 584,
    position: "absolute",
  },
  entryverticalscrollviewlarge: {
    height: "91.06%",
    width: "94.29%",
    top: "4.47%",
    bottom: "4.47%",
    left: "2.86%",
  },
  settingscontainer: {
    height: "78.33%",
    width: "92.11%",
    top: "18.33%",
    right: "3.95%",
    bottom: "3.33%",
    left: "3.95%",
    position: "absolute",
  },
  settingscontentcontainer: {
    alignSelf: "stretch",
    height: 600,
    marginTop: 5,
  },
  navbox: {
    height: "100%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  navbuttonChild: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  newpage: {
    left: "24%",
    top: "26.67%",
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
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Settings;
