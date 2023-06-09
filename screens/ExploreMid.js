import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import Header from "../components/Header";
import ContentInnerContainer from "../components/ContentInnerContainer";
import CategoryListContainer from "../components/CategoryListContainer";
import ContentHeaderContainer from "../components/ContentHeaderContainer";
import ListTitleContainerSmall from "../components/ListTitleContainerSmall";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ExploreMid = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.exploremid}>
      <Header
        headerTop="unset"
        headerLeft="unset"
        headerWidth="unset"
        headerHeight={100}
        headerRight="unset"
        headerBottom="unset"
      />
      <View style={styles.exploremidcontentcontainer}>
        <ContentInnerContainer />
        <CategoryListContainer />
        <View
          style={[styles.pageheaderboxsmall, styles.backarrowframe1Position]}
        >
          <ContentHeaderContainer
            contentHeaderContainerHeight="100%"
            contentHeaderContainerBottom="0%"
          />
          <ListTitleContainerSmall
            listTitleContainerSmallHeight="70%"
            listTitleContainerSmallTop="15%"
            listTitleContainerSmallBottom="15%"
            explore="Movies"
          />
          <Pressable
            style={styles.backarrowframe}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/backarrowframe.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[styles.backarrowframe1, styles.backarrowframe1Position]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/backarrowframe.png")}
          />
        </Pressable>
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
        <Pressable
          style={styles.navbutton1}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={[styles.navbuttonChild, styles.navboxPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage1, styles.newpageTypo]}>Settings</Text>
        </Pressable>
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
  backarrowframe1Position: {
    left: "1.39%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  navboxPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
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
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  icon: {
    display: "none",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  backarrowframe: {
    top: "21%",
    right: "78.57%",
    bottom: "20%",
    width: "21.43%",
    height: "59%",
    left: "0%",
    position: "absolute",
  },
  pageheaderboxsmall: {
    height: "17.24%",
    width: "97.22%",
    right: "1.39%",
    bottom: "82.76%",
    top: "0%",
    left: "1.39%",
  },
  icon1: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  backarrowframe1: {
    top: "3.62%",
    right: "77.78%",
    bottom: "86.21%",
    width: "20.83%",
    height: "10.17%",
  },
  exploremidcontentcontainer: {
    alignSelf: "stretch",
    height: 580,
    marginTop: 20,
  },
  navbox: {
    backgroundColor: Color.white,
    bottom: "0%",
    right: "0%",
  },
  navbuttonChild: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  newpage: {
    left: "24%",
    top: "26.67%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
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
    display: "flex",
    justifyContent: "center",
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
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_5xl,
  },
  navbutton2: {
    right: "3.68%",
    left: "70%",
  },
  navbar: {
    width: 380,
    height: 124,
    marginTop: 20,
  },
  exploremid: {
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

export default ExploreMid;
