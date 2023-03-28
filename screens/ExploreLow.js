import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ExploreLow = () => {
  return (
    <View style={styles.explorelow}>
      <View style={[styles.header, styles.headerPosition]}>
        <View
          style={[
            styles.headerbox,
            styles.headerboxPosition,
            styles.headerboxPosition1,
          ]}
        />
        <Image
          style={[styles.logoitboxIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/logoitbox.png")}
        />
        <Text style={[styles.it, styles.itFlexBox]}>IT</Text>
        <Text style={[styles.buck, styles.itFlexBox]}>Buck</Text>
      </View>
      <View style={styles.explorelowcontentcontainer}>
        <View
          style={[
            styles.contentinnercontainer,
            styles.contentinnercontainerBorder,
          ]}
        />
        <View
          style={[styles.listcontainerlow, styles.listcontainerlowPosition]}
        >
          <View
            style={[
              styles.listcontainer,
              styles.headerboxPosition,
              styles.headerboxPosition1,
            ]}
          />
          <View style={[styles.eventlistbox, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.eventboxPosition,
                styles.eventboxLayout,
              ]}
            />
            <Text style={[styles.friendevent, styles.exploreFlexBox]}>
              1960’s
            </Text>
          </View>
          <View style={[styles.eventlistbox1, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.eventboxPosition,
                styles.eventboxLayout,
              ]}
            />
            <Text style={[styles.friendevent, styles.exploreFlexBox]}>
              1970’s
            </Text>
          </View>
          <View style={[styles.eventlistbox2, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.eventboxPosition,
                styles.eventboxLayout,
              ]}
            />
            <Text style={[styles.friendevent, styles.exploreFlexBox]}>
              1980’s
            </Text>
          </View>
          <View style={[styles.eventlistbox3, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.eventboxPosition,
                styles.eventboxLayout,
              ]}
            />
            <Text style={[styles.friendevent, styles.exploreFlexBox]}>
              1990’s
            </Text>
          </View>
          <View style={[styles.eventlistbox4, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.eventboxPosition,
                styles.eventboxLayout,
              ]}
            />
            <Text style={[styles.friendevent, styles.exploreFlexBox]}>
              2000’s
            </Text>
          </View>
          <View style={[styles.eventlistbox5, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.eventboxPosition,
                styles.eventboxLayout,
              ]}
            />
            <Text style={[styles.friendevent, styles.exploreFlexBox]}>
              2010’s
            </Text>
          </View>
          <View style={[styles.eventlistbox6, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.eventboxPosition,
                styles.eventboxLayout,
              ]}
            />
            <Text style={[styles.friendevent, styles.exploreFlexBox]}>
              2020’s
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.exploreheaderboxthreeoption,
            styles.listcontainerlowPosition,
          ]}
        >
          <View
            style={[styles.contentheadercontainer, styles.headerboxPosition1]}
          />
          <View style={[styles.threeoptionslider, styles.headerboxPosition]}>
            <View
              style={[
                styles.threeoptionsliderChild,
                styles.eventboxLayout,
                styles.contentinnercontainerBorder,
              ]}
            />
            <Image
              style={[styles.threeoptionsliderItem, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Text style={[styles.newsFeed, styles.newsFlexBox]}>Year</Text>
            <Text style={[styles.newsFeed1, styles.newsFlexBox]}>Decade</Text>
            <Text style={styles.badges}>All</Text>
          </View>
          <Pressable
            style={[styles.tracktogglebutton, styles.backarrowIconPosition]}
            onPress={() => {}}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/tracktogglebutton.png")}
            />
          </Pressable>
          <View style={[styles.listtitlecontainersmall, styles.newpageLayout]}>
            <View style={[styles.listtitlebox, styles.eventboxPosition]} />
            <Text style={[styles.explore, styles.exploreFlexBox]}>
              Best Pictures
            </Text>
          </View>
          <Image
            style={[
              styles.backarrowIcon,
              styles.backarrowIconPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/backarrow1.png")}
          />
        </View>
      </View>
      <View style={[styles.navbar, styles.headerPosition]}>
        <View
          style={[
            styles.headerbox,
            styles.headerboxPosition,
            styles.headerboxPosition1,
          ]}
        />
        <View style={[styles.navbutton, styles.navbuttonPosition]}>
          <Image
            style={[
              styles.navbuttonChild,
              styles.iconLayout,
              styles.headerboxPosition,
              styles.headerboxPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage, styles.newpageLayout]}>Home</Text>
        </View>
        <View style={[styles.navbutton1, styles.navbuttonPosition]}>
          <Image
            style={[
              styles.navbuttonChild,
              styles.iconLayout,
              styles.headerboxPosition,
              styles.headerboxPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.newpage, styles.newpageLayout]}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 380,
    left: 5,
    position: "absolute",
  },
  headerboxPosition: {
    bottom: "0%",
    position: "absolute",
  },
  headerboxPosition1: {
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  itFlexBox: {
    textAlign: "right",
    color: Color.black,
    position: "absolute",
  },
  contentinnercontainerBorder: {
    borderStyle: "solid",
    borderColor: "#000",
    position: "absolute",
  },
  listcontainerlowPosition: {
    left: "1.39%",
    right: "1.39%",
    width: "97.22%",
    position: "absolute",
  },
  eventlistboxPosition: {
    left: "2.86%",
    width: "94.29%",
    height: "11%",
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
  eventboxLayout: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
  },
  exploreFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  newsFlexBox: {
    top: "81.3%",
    width: "29.75%",
    height: "18.7%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  backarrowIconPosition: {
    left: "1.14%",
    position: "absolute",
  },
  newpageLayout: {
    width: "71.43%",
    position: "absolute",
  },
  navbuttonPosition: {
    bottom: "19.35%",
    top: "8.06%",
    width: "36.84%",
    height: "72.58%",
    position: "absolute",
  },
  headerbox: {
    left: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  logoitboxIcon: {
    height: "80%",
    top: "23.25%",
    right: "-10.09%",
    bottom: "-3.25%",
    left: "57.46%",
    borderRadius: Border.br_mini,
    width: "52.63%",
    position: "absolute",
  },
  it: {
    height: "30%",
    width: "10.53%",
    top: "35%",
    left: "65%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.bubblegumSansRegular,
    textAlign: "right",
    color: Color.black,
  },
  buck: {
    left: "1.84%",
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.birthstoneRegular,
    width: "52.63%",
    top: "0%",
    height: "100%",
  },
  header: {
    top: 0,
    height: 100,
  },
  contentinnercontainer: {
    height: "103.45%",
    width: "105.56%",
    top: "-1.72%",
    right: "-2.78%",
    bottom: "-1.72%",
    left: "-2.78%",
    borderWidth: 10,
    borderColor: "#000",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
  },
  listcontainer: {
    backgroundColor: Color.black,
    borderRadius: Border.br_mini,
    left: "0%",
    height: "100%",
  },
  eventbox: {
    borderColor: "#f4d152",
  },
  friendevent: {
    height: "90.91%",
    width: "93.94%",
    top: "4.55%",
    left: "3.03%",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.black,
  },
  eventlistbox: {
    top: "85%",
    bottom: "4%",
  },
  eventlistbox1: {
    top: "71.5%",
    bottom: "17.5%",
  },
  eventlistbox2: {
    top: "58%",
    bottom: "31%",
  },
  eventlistbox3: {
    top: "44.5%",
    bottom: "44.5%",
  },
  eventlistbox4: {
    top: "31%",
    bottom: "58%",
  },
  eventlistbox5: {
    top: "17.5%",
    bottom: "71.5%",
  },
  eventlistbox6: {
    top: "4%",
    bottom: "85%",
  },
  listcontainerlow: {
    height: "68.97%",
    top: "30%",
    bottom: "1.03%",
  },
  contentheadercontainer: {
    height: "99.89%",
    bottom: "0.11%",
    borderRadius: Border.br_mini,
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  threeoptionsliderChild: {
    height: "76.77%",
    width: "99.17%",
    top: "-7.67%",
    right: "0.83%",
    bottom: "30.9%",
    borderWidth: 5,
    borderColor: "#000",
    left: "0%",
  },
  threeoptionsliderItem: {
    height: "46.74%",
    width: "20.66%",
    top: "7.79%",
    right: "75.21%",
    bottom: "45.47%",
    left: "4.13%",
    position: "absolute",
  },
  newsFeed: {
    left: "70.25%",
  },
  newsFeed1: {
    left: "34.71%",
  },
  badges: {
    top: "81.02%",
    width: "29.75%",
    height: "18.7%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    left: "0%",
    position: "absolute",
  },
  threeoptionslider: {
    height: "38.3%",
    width: "69.14%",
    top: "61.7%",
    left: "28%",
    right: "2.86%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  tracktogglebutton: {
    top: "58.76%",
    right: "76.57%",
    bottom: "-16.34%",
    width: "22.29%",
    height: "57.58%",
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
  },
  listtitlecontainersmall: {
    height: "41.13%",
    top: "8.81%",
    bottom: "50.06%",
    left: "25.71%",
    right: "2.86%",
  },
  backarrowIcon: {
    height: "38.62%",
    width: "23.72%",
    top: "12.03%",
    right: "75.13%",
    bottom: "49.35%",
  },
  exploreheaderboxthreeoption: {
    height: "29.34%",
    bottom: "70.66%",
    top: "0%",
  },
  explorelowcontentcontainer: {
    top: 120,
    left: 15,
    width: 360,
    height: 580,
    position: "absolute",
  },
  navbuttonChild: {
    left: "0%",
    height: "100%",
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
  explorelow: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ExploreLow;
