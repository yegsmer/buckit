import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import TwoOptionSlider from "../components/TwoOptionSlider";
import HomeFeedTracked from "../components/HomeFeedTracked";
import NavBar from "../components/NavBar";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Header
        headerTop="unset"
        headerLeft="unset"
        headerWidth="unset"
        headerHeight="unset"
        headerRight="unset"
        headerBottom="unset"
      />
      <View
        style={[styles.profilecontentcontainer, styles.usernameboxChildBorder]}
      >
        <View style={styles.profileheaderbox}>
          <View style={[styles.homefeedbox, styles.childPosition]} />
          <Image
            style={[
              styles.portraitcontainerIcon,
              styles.profilescoreiconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/portraitcontainer.png")}
          />
          <View style={styles.profileinfocontainer}>
            <View
              style={[styles.profileheaderbox1, styles.friendsboxChildPosition]}
            />
            <View style={styles.usernamebox}>
              <View style={[styles.usernameboxChild, styles.childPosition]} />
              <Text style={styles.gramstad6}>Gramstad_6</Text>
            </View>
            <View style={styles.profilescoreicon}>
              <Image
                style={[
                  styles.profilescoreiconChild,
                  styles.profilescoreiconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/ellipse-7.png")}
              />
              <Image
                style={[
                  styles.profilescoreiconItem,
                  styles.profilescoreiconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/ellipse-8.png")}
              />
              <Image
                style={[
                  styles.profilescoreiconInner,
                  styles.profilescoreiconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/ellipse-9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>620</Text>
            </View>
          </View>
          <View style={styles.friendsbox}>
            <View
              style={[styles.friendsboxChild, styles.friendsboxChildPosition]}
            />
            <Text style={[styles.friends, styles.textFlexBox]}>{`150
Friends`}</Text>
          </View>
          <TwoOptionSlider
            ellipse3={require("../assets/ellipse-3.png")}
            newsFeed="News Feed"
            badges="Badges"
          />
        </View>
        <HomeFeedTracked />
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
  usernameboxChildBorder: {
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  profilescoreiconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  friendsboxChildPosition: {
    backgroundColor: Color.goldenrod,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textFlexBox: {
    top: "22.5%",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
    alignItems: "center",
  },
  homefeedbox: {
    position: "absolute",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  portraitcontainerIcon: {
    height: "62.86%",
    top: "3.57%",
    right: "54%",
    bottom: "33.57%",
    left: "4.29%",
    width: "41.71%",
  },
  profileheaderbox1: {
    borderRadius: Border.br_26xl,
  },
  usernameboxChild: {
    borderWidth: 1,
    borderRadius: Border.br_26xl,
    position: "absolute",
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  gramstad6: {
    height: "60%",
    width: "75%",
    top: "20%",
    left: "12.5%",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
    alignItems: "center",
  },
  usernamebox: {
    height: "25.91%",
    width: "85.88%",
    top: "3.11%",
    right: "7.06%",
    bottom: "70.98%",
    left: "7.06%",
    position: "absolute",
  },
  profilescoreiconChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  profilescoreiconItem: {
    height: "83.33%",
    width: "66.67%",
    top: "8.33%",
    right: "16.67%",
    bottom: "8.33%",
    left: "16.67%",
  },
  profilescoreiconInner: {
    height: "66.67%",
    width: "53.33%",
    top: "16.67%",
    right: "23.33%",
    bottom: "16.67%",
    left: "23.33%",
  },
  text: {
    height: "58.33%",
    width: "46.67%",
    left: "26.67%",
    fontSize: FontSize.size_17xl,
  },
  profilescoreicon: {
    height: "62.18%",
    width: "88.24%",
    top: "33.68%",
    right: "5.88%",
    bottom: "4.15%",
    left: "5.88%",
    position: "absolute",
  },
  profileinfocontainer: {
    height: "68.93%",
    width: "48.57%",
    top: "1.79%",
    right: "2.86%",
    bottom: "29.29%",
    left: "48.57%",
    position: "absolute",
  },
  friendsboxChild: {
    borderRadius: Border.br_mini,
  },
  friends: {
    height: "56.25%",
    width: "61.64%",
    left: "17.81%",
    fontSize: FontSize.size_5xl,
  },
  friendsbox: {
    height: "28.57%",
    top: "69.64%",
    right: "55.43%",
    bottom: "1.79%",
    left: "2.86%",
    width: "41.71%",
    position: "absolute",
  },
  profileheaderbox: {
    width: 350,
    height: 280,
  },
  profilecontentcontainer: {
    borderWidth: 10,
    width: 380,
    height: 600,
    paddingHorizontal: Padding.p_8xs,
    paddingBottom: Padding.p_8xs,
    justifyContent: "flex-end",
    marginTop: 20,
    borderRadius: Border.br_mini,
  },
  profile: {
    flex: 1,
    height: 844,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Profile;
