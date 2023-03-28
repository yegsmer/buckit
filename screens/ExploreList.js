import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ExploreList = () => {
  return (
    <View style={styles.explorelist}>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={[styles.navbox, styles.childPosition]} />
        <View style={[styles.navbutton, styles.navbuttonPosition]}>
          <Image
            style={[
              styles.navbuttonChild,
              styles.iconLayout,
              styles.childPosition,
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
              styles.childPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.newpage}>Profile</Text>
        </View>
      </View>
      <View style={styles.explorelistcontentcontainer}>
        <View
          style={[
            styles.contentinnercontainer,
            styles.twooptionsliderChildBorder,
          ]}
        />
        <View
          style={[styles.listcontainerlow, styles.listcontainerlowPosition]}
        >
          <View style={[styles.listcontainer, styles.childPosition]} />
          <View style={[styles.eventlistbox, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.eventboxPosition,
                styles.eventboxLayout,
              ]}
            />
            <Text style={[styles.friendevent, styles.textFlexBox]}>
              2015: Spotlight
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
            <Text style={[styles.friendevent, styles.textFlexBox]}>
              2016: Moonlight
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
            <Text style={[styles.friendevent, styles.textFlexBox]}>
              2017: The Shape of Water
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
            <Text style={[styles.friendevent, styles.textFlexBox]}>
              2018: Green Book
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
            <Text style={[styles.friendevent, styles.textFlexBox]}>
              2019: Parasite
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
            <Text style={[styles.friendevent, styles.textFlexBox]}>
              2020: Nomadland
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
            <Text style={[styles.friendevent, styles.textFlexBox]}>
              2021: CODA
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.exploreheaderboxtwooption,
            styles.listcontainerlowPosition,
          ]}
        >
          <View style={[styles.contentheadercontainer, styles.childPosition]} />
          <View style={styles.twooptionslider}>
            <View
              style={[
                styles.twooptionsliderChild,
                styles.eventboxLayout,
                styles.twooptionsliderChildBorder,
                styles.childPosition,
              ]}
            />
            <Image
              style={[styles.twooptionsliderItem, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Text style={[styles.newsFeed, styles.badgesFlexBox]}>
              Nominees
            </Text>
            <Text style={[styles.badges, styles.badgesFlexBox]}>Winners</Text>
          </View>
          <View
            style={[
              styles.trackcompletionbutton,
              styles.trackcompletionbuttonLayout,
            ]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.iconLayout,
                styles.childPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/tracktoggle.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>30%</Text>
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
          <View
            style={[
              styles.listtitlecontainersmall,
              styles.trackcompletionbuttonLayout,
            ]}
          >
            <View style={[styles.listtitlebox, styles.eventboxPosition]} />
            <Text style={[styles.explore, styles.textFlexBox]}>
              Best Pictures: All
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
      <View style={[styles.header, styles.navbarPosition]}>
        <View style={[styles.navbox, styles.childPosition]} />
        <Image
          style={[styles.logoitboxIcon, styles.iconLayout]}
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
  childPosition: {
    right: "0%",
    left: "0%",
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
  twooptionsliderChildBorder: {
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
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  badgesFlexBox: {
    top: "81.25%",
    width: "45%",
    height: "18.75%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  trackcompletionbuttonLayout: {
    height: "41.18%",
    position: "absolute",
  },
  backarrowIconPosition: {
    left: "1.14%",
    position: "absolute",
  },
  itFlexBox: {
    textAlign: "right",
    color: Color.black,
    position: "absolute",
  },
  navbox: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  navbuttonChild: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  newpage: {
    height: "33.33%",
    top: "33.33%",
    left: "14.29%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_5xl,
    width: "71.43%",
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
    borderColor: "#000",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
  },
  listcontainer: {
    backgroundColor: Color.black,
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  twooptionsliderChild: {
    height: "76.99%",
    top: "-7.69%",
    bottom: "30.7%",
    borderWidth: 5,
    borderColor: "#000",
    left: "0%",
  },
  twooptionsliderItem: {
    height: "46.88%",
    width: "31.25%",
    top: "7.81%",
    right: "62.5%",
    bottom: "45.31%",
    left: "6.25%",
    position: "absolute",
  },
  newsFeed: {
    left: "55%",
  },
  badges: {
    left: "0%",
  },
  twooptionslider: {
    height: "38.24%",
    width: "45.71%",
    top: "61.76%",
    left: "51.43%",
    right: "2.86%",
    bottom: "0%",
    position: "absolute",
  },
  text: {
    height: "41.43%",
    width: "65.71%",
    top: "28.57%",
    left: "17.14%",
    color: Color.black,
    fontSize: FontSize.size_5xl,
    alignItems: "center",
    display: "flex",
  },
  trackcompletionbutton: {
    width: "20%",
    right: "53.14%",
    left: "26.86%",
    top: "58.82%",
    bottom: "0%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  tracktogglebutton: {
    right: "76.57%",
    bottom: "-16.47%",
    width: "22.29%",
    height: "57.65%",
    top: "58.82%",
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
    top: "8.82%",
    bottom: "50%",
    left: "25.71%",
    right: "2.86%",
    width: "71.43%",
    height: "41.18%",
  },
  backarrowIcon: {
    height: "38.67%",
    width: "23.72%",
    top: "12.04%",
    right: "75.13%",
    bottom: "49.29%",
  },
  exploreheaderboxtwooption: {
    height: "29.31%",
    bottom: "70.69%",
    top: "0%",
  },
  explorelistcontentcontainer: {
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
    borderRadius: Border.br_mini,
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
  explorelist: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ExploreList;
