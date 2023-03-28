import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Settings = () => {
  return (
    <View style={styles.settings}>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={[styles.navbox, styles.navboxPosition]} />
        <View style={[styles.navbutton, styles.navbuttonPosition]}>
          <Image
            style={[
              styles.navbuttonChild,
              styles.iconLayout,
              styles.navboxPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.newpage}>Home</Text>
        </View>
        <View style={[styles.navbutton1, styles.navbuttonPosition]}>
          <Image
            style={[
              styles.navbuttonChild,
              styles.iconLayout,
              styles.navboxPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.newpage}>Profile</Text>
        </View>
      </View>
      <View style={styles.settingscontentcontainer}>
        <View
          style={[styles.contentinnercontainer, styles.listtitleboxBorder]}
        />
        <View
          style={[styles.settingscontainer, styles.settingscontainerPosition]}
        >
          <View
            style={[
              styles.listcontainer,
              styles.listcontainerLayout,
              styles.navboxPosition,
            ]}
          />
          <View style={[styles.eventlistbox, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={[styles.friendevent, styles.exploreFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox1, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={[styles.friendevent, styles.exploreFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox2, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={[styles.friendevent, styles.exploreFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox3, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={[styles.friendevent, styles.exploreFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox4, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={[styles.friendevent, styles.exploreFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox5, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={[styles.friendevent, styles.exploreFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox6, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={[styles.friendevent, styles.exploreFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
        </View>
        <View
          style={[styles.pageheaderboxsmall, styles.settingscontainerPosition]}
        >
          <View
            style={[
              styles.contentheadercontainer,
              styles.listcontainerLayout,
              styles.navboxPosition,
            ]}
          />
          <View style={styles.listtitlecontainersmall}>
            <View
              style={[
                styles.listtitlebox,
                styles.eventboxPosition,
                styles.listtitleboxBorder,
              ]}
            />
            <Text style={[styles.explore, styles.exploreFlexBox]}>
              Settings
            </Text>
          </View>
          <Image
            style={[styles.backarrowIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/backarrow2.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.navbarPosition]}>
        <View style={[styles.navbox, styles.navboxPosition]} />
        <Image
          style={[
            styles.logoitboxIcon,
            styles.listcontainerLayout,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/logoitbox.png")}
        />
        <Text style={[styles.it, styles.itFlexBox]}>IT</Text>
        <Text style={[styles.buck, styles.itFlexBox]}>Buck</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    width: 380,
    left: 5,
    position: "absolute",
  },
  navboxPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  navbuttonPosition: {
    bottom: "19.35%",
    top: "8.06%",
    width: "36.84%",
    height: "72.58%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  listtitleboxBorder: {
    borderColor: "#000",
    borderRadius: Border.br_mini,
  },
  settingscontainerPosition: {
    left: "1.39%",
    right: "1.39%",
    width: "97.22%",
    position: "absolute",
  },
  listcontainerLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  eventlistboxPosition: {
    left: "2.86%",
    width: "94.29%",
    height: "9.17%",
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
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  itFlexBox: {
    textAlign: "right",
    color: Color.black,
    position: "absolute",
  },
  navbox: {
    position: "absolute",
    backgroundColor: Color.white,
  },
  navbuttonChild: {
    position: "absolute",
  },
  newpage: {
    height: "33.33%",
    top: "33.33%",
    left: "14.29%",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    width: "71.43%",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  navbutton: {
    right: "57.89%",
    left: "5.26%",
  },
  navbutton1: {
    right: "7.89%",
    left: "55.26%",
  },
  navbar: {
    top: 720,
    height: 124,
  },
  contentinnercontainer: {
    height: "103.45%",
    width: "105.56%",
    top: "-1.72%",
    right: "-2.78%",
    bottom: "-1.72%",
    left: "-2.78%",
    borderWidth: 10,
    borderStyle: "solid",
    borderColor: "#000",
    position: "absolute",
    backgroundColor: Color.white,
  },
  listcontainer: {
    backgroundColor: Color.black,
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
    alignItems: "center",
    display: "flex",
  },
  eventlistbox: {
    top: "70.83%",
    bottom: "20%",
  },
  eventlistbox1: {
    top: "59.58%",
    bottom: "31.25%",
  },
  eventlistbox2: {
    top: "48.33%",
    bottom: "42.5%",
  },
  eventlistbox3: {
    top: "37.08%",
    bottom: "53.75%",
  },
  eventlistbox4: {
    top: "25.83%",
    bottom: "65%",
  },
  eventlistbox5: {
    top: "14.58%",
    bottom: "76.25%",
  },
  eventlistbox6: {
    top: "3.33%",
    bottom: "87.5%",
  },
  settingscontainer: {
    height: "81.03%",
    top: "17.24%",
    bottom: "1.72%",
  },
  contentheadercontainer: {
    backgroundColor: Color.white,
  },
  listtitlebox: {
    backgroundColor: Color.turquoise,
  },
  explore: {
    height: "67.14%",
    width: "90.4%",
    top: "18.57%",
    left: "3.6%",
    fontSize: FontSize.size_17xl,
    color: Color.white,
  },
  listtitlecontainersmall: {
    height: "70%",
    top: "15%",
    bottom: "15%",
    left: "25.71%",
    right: "2.86%",
    width: "71.43%",
    position: "absolute",
  },
  backarrowIcon: {
    height: "65.73%",
    width: "23.72%",
    top: "20.47%",
    right: "77.42%",
    bottom: "13.79%",
    left: "-1.14%",
    position: "absolute",
  },
  pageheaderboxsmall: {
    height: "17.24%",
    bottom: "82.76%",
    top: "0%",
  },
  settingscontentcontainer: {
    top: 120,
    left: 15,
    width: 360,
    height: 580,
    position: "absolute",
  },
  logoitboxIcon: {
    height: "80%",
    top: "23.25%",
    right: "-10.09%",
    bottom: "-3.25%",
    left: "57.46%",
    width: "52.63%",
  },
  it: {
    height: "30%",
    width: "10.53%",
    top: "35%",
    left: "65%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.bubblegumSansRegular,
    textAlign: "right",
  },
  buck: {
    left: "1.84%",
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.birthstoneRegular,
    width: "52.63%",
    top: "0%",
    textAlign: "right",
    height: "100%",
  },
  header: {
    top: 0,
    height: 100,
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
