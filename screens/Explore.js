import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Explore = () => {
  return (
    <View style={styles.explore}>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View
          style={[styles.navbox, styles.navboxPosition, styles.buckLayout]}
        />
        <View style={[styles.navbutton, styles.navbuttonPosition]}>
          <Image
            style={[
              styles.navbuttonChild,
              styles.logoitboxIconLayout1,
              styles.navboxPosition,
              styles.buckLayout,
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
              styles.logoitboxIconLayout1,
              styles.navboxPosition,
              styles.buckLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.newpage}>Profile</Text>
        </View>
      </View>
      <View style={styles.explorecontentcontainer}>
        <View
          style={[styles.contentinnercontainer, styles.listtitleboxBorder]}
        />
        <View style={[styles.listcontainer, styles.listcontainerPosition]}>
          <View
            style={[
              styles.listcontainer1,
              styles.logoitboxIconLayout,
              styles.navboxPosition,
              styles.buckLayout,
            ]}
          />
          <View
            style={[styles.categoryiconPosition3, styles.categoryiconPosition4]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.logoitboxIconLayout1,
                styles.navboxPosition,
                styles.buckLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.categoryname, styles.explore1FlexBox]}>
              Movies
            </Text>
          </View>
          <View
            style={[styles.categoryiconPosition2, styles.categoryiconPosition4]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.logoitboxIconLayout1,
                styles.navboxPosition,
                styles.buckLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.categoryname, styles.explore1FlexBox]}>
              Travel
            </Text>
          </View>
          <View
            style={[styles.categoryiconPosition1, styles.categoryiconPosition3]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.logoitboxIconLayout1,
                styles.navboxPosition,
                styles.buckLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.categoryname, styles.explore1FlexBox]}>
              Restaurants
            </Text>
          </View>
          <View
            style={[styles.categoryiconPosition1, styles.categoryiconPosition2]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.logoitboxIconLayout1,
                styles.navboxPosition,
                styles.buckLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.categoryname, styles.explore1FlexBox]}>
              Literature
            </Text>
          </View>
          <View
            style={[styles.categoryiconPosition, styles.categoryiconPosition3]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.logoitboxIconLayout1,
                styles.navboxPosition,
                styles.buckLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.categoryname, styles.explore1FlexBox]}>
              Television
            </Text>
          </View>
          <View
            style={[styles.categoryiconPosition, styles.categoryiconPosition2]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.logoitboxIconLayout1,
                styles.navboxPosition,
                styles.buckLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.categoryname, styles.explore1FlexBox]}>
              Gaming
            </Text>
          </View>
        </View>
        <View
          style={[styles.exploreheaderboxlarge, styles.listcontainerPosition]}
        >
          <View
            style={[
              styles.contentheadercontainer,
              styles.logoitboxIconLayout,
              styles.navboxPosition,
              styles.buckLayout,
            ]}
          />
          <View style={[styles.listtitlecontainerlarge, styles.navboxPosition]}>
            <View
              style={[
                styles.listtitlebox,
                styles.listtitleboxBorder,
                styles.navboxPosition,
                styles.buckLayout,
              ]}
            />
            <Text style={[styles.explore1, styles.explore1FlexBox]}>
              Explore
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.navbarPosition]}>
        <View
          style={[styles.navbox, styles.navboxPosition, styles.buckLayout]}
        />
        <Image
          style={[
            styles.logoitboxIcon,
            styles.logoitboxIconLayout,
            styles.logoitboxIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/logoitbox.png")}
        />
        <Text style={[styles.it, styles.itFlexBox]}>IT</Text>
        <Text style={[styles.buck, styles.itFlexBox, styles.buckLayout]}>
          Buck
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    left: "1.28%",
    right: "1.28%",
    width: "97.44%",
    position: "absolute",
  },
  navboxPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  buckLayout: {
    height: "100%",
    top: "0%",
  },
  navbuttonPosition: {
    bottom: "19.35%",
    top: "8.06%",
    width: "36.84%",
    height: "72.58%",
    position: "absolute",
  },
  logoitboxIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  listtitleboxBorder: {
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  listcontainerPosition: {
    left: "1.39%",
    right: "1.39%",
    width: "97.22%",
    position: "absolute",
  },
  logoitboxIconLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  categoryiconPosition4: {
    bottom: "67.45%",
    top: "4.89%",
    width: "37.14%",
    height: "27.66%",
    position: "absolute",
  },
  explore1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  categoryiconPosition3: {
    left: "5.71%",
    right: "57.14%",
  },
  categoryiconPosition2: {
    left: "57.14%",
    right: "5.71%",
  },
  itFlexBox: {
    textAlign: "right",
    color: Color.black,
    position: "absolute",
  },
  navbox: {
    top: "0%",
    bottom: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  navbuttonChild: {
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  newpage: {
    height: "33.33%",
    width: "71.43%",
    top: "33.33%",
    left: "14.29%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_5xl,
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
    height: "14.69%",
    top: "85.31%",
    bottom: "0%",
  },
  contentinnercontainer: {
    height: "103.45%",
    width: "105.56%",
    top: "-1.72%",
    right: "-2.78%",
    bottom: "-1.72%",
    left: "-2.78%",
    borderWidth: 10,
    backgroundColor: Color.white,
  },
  listcontainer1: {
    backgroundColor: Color.black,
    top: "0%",
    bottom: "0%",
  },
  categoryname: {
    height: "30.77%",
    width: "92.31%",
    top: "34.62%",
    left: "3.85%",
    color: Color.black,
    fontSize: FontSize.size_5xl,
    alignItems: "center",
    display: "flex",
  },
  categoryiconPosition1: {
    bottom: "34.89%",
    top: "37.45%",
    width: "37.14%",
    height: "27.66%",
    position: "absolute",
  },
  categoryiconPosition: {
    bottom: "2.34%",
    top: "70%",
    width: "37.14%",
    height: "27.66%",
    position: "absolute",
  },
  listcontainer: {
    height: "81.03%",
    top: "17.24%",
    bottom: "1.72%",
  },
  contentheadercontainer: {
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
  },
  listtitlebox: {
    backgroundColor: Color.turquoise,
    borderWidth: 3,
    top: "0%",
    bottom: "0%",
  },
  explore1: {
    height: "67.14%",
    width: "93.43%",
    top: "18.57%",
    left: "3.71%",
    fontSize: FontSize.size_17xl,
    color: Color.white,
  },
  listtitlecontainerlarge: {
    height: "70%",
    top: "15%",
    bottom: "15%",
    position: "absolute",
  },
  exploreheaderboxlarge: {
    height: "17.24%",
    bottom: "82.76%",
    top: "0%",
  },
  explorecontentcontainer: {
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
  },
  header: {
    height: "11.85%",
    bottom: "88.15%",
    top: "0%",
  },
  explore: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Explore;
