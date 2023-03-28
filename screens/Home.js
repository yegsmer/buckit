import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.navbar, styles.navbarLayout]}>
        <View
          style={[styles.navbox, styles.navboxPosition, styles.navboxPosition1]}
        />
        <View style={[styles.navbutton, styles.navbuttonPosition]}>
          <Image
            style={[styles.logoitboxIconLayout, styles.navboxPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.newpage}>Profile</Text>
        </View>
        <View style={[styles.navbutton1, styles.navbuttonPosition]}>
          <Image
            style={styles.navboxPosition}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.newpage}>Explore</Text>
        </View>
      </View>
      <View style={styles.homecontentcontainer}>
        <View style={styles.contentinnercontainer} />
        <View style={[styles.homefeedtracked, styles.homefeedeventsPosition]}>
          <View
            style={[
              styles.feedbox,
              styles.feedboxBorder,
              styles.navboxPosition,
            ]}
          />
          <View
            style={[styles.trackediconPosition3, styles.trackediconPosition4]}
          >
            <Image
              style={styles.navboxPosition}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.friendeventFlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition2, styles.trackediconPosition4]}
          >
            <Image
              style={styles.navboxPosition}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.friendeventFlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition1, styles.trackediconPosition4]}
          >
            <Image
              style={styles.navboxPosition}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.friendeventFlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition, styles.trackediconPosition3]}
          >
            <Image
              style={styles.navboxPosition}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.friendeventFlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition, styles.trackediconPosition2]}
          >
            <Image
              style={styles.navboxPosition}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.friendeventFlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition, styles.trackediconPosition1]}
          >
            <Image
              style={styles.navboxPosition}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.friendeventFlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
        </View>
        <View style={[styles.homefeedevents, styles.homefeedeventsPosition]}>
          <View
            style={[
              styles.feedbox1,
              styles.headerPosition,
              styles.feedboxBorder,
            ]}
          />
          <View style={[styles.eventlistbox, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.feedboxBorder,
                styles.navboxPosition,
                styles.navboxPosition1,
              ]}
            />
            <Text
              style={[styles.friendevent, styles.friendeventFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox1, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.feedboxBorder,
                styles.navboxPosition,
                styles.navboxPosition1,
              ]}
            />
            <Text
              style={[styles.friendevent, styles.friendeventFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox2, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.feedboxBorder,
                styles.navboxPosition,
                styles.navboxPosition1,
              ]}
            />
            <Text
              style={[styles.friendevent, styles.friendeventFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox3, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.feedboxBorder,
                styles.navboxPosition,
                styles.navboxPosition1,
              ]}
            />
            <Text
              style={[styles.friendevent, styles.friendeventFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox4, styles.eventlistboxPosition]}>
            <View
              style={[
                styles.eventbox,
                styles.feedboxBorder,
                styles.navboxPosition,
                styles.navboxPosition1,
              ]}
            />
            <Text
              style={[styles.friendevent, styles.friendeventFlexBox]}
            >{`{User} completed {List_name} list`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition, styles.navbarLayout]}>
        <View
          style={[styles.navbox, styles.navboxPosition, styles.navboxPosition1]}
        />
        <Image
          style={[styles.logoitboxIcon, styles.logoitboxIconLayout]}
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
  navbarLayout: {
    width: 380,
    left: 5,
  },
  navboxPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  navboxPosition1: {
    backgroundColor: Color.white,
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  navbuttonPosition: {
    bottom: "19.35%",
    top: "8.06%",
    width: "36.84%",
    height: "72.58%",
    position: "absolute",
  },
  homefeedeventsPosition: {
    left: "1.39%",
    right: "1.39%",
    width: "97.22%",
    height: "48.28%",
    position: "absolute",
  },
  feedboxBorder: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  trackediconPosition4: {
    bottom: "53.57%",
    top: "10.71%",
    width: "28.57%",
    height: "35.71%",
    position: "absolute",
  },
  friendeventFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  trackediconPosition3: {
    left: "2.86%",
    right: "68.57%",
  },
  trackediconPosition2: {
    left: "35.71%",
    right: "35.71%",
  },
  trackediconPosition1: {
    left: "68.57%",
    right: "2.86%",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  eventlistboxPosition: {
    width: "94.29%",
    height: "15.71%",
    right: "2.86%",
    left: "2.86%",
    position: "absolute",
  },
  logoitboxIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itFlexBox: {
    textAlign: "right",
    color: Color.black,
    position: "absolute",
  },
  navbox: {
    position: "absolute",
  },
  newpage: {
    height: "33.33%",
    width: "71.43%",
    top: "33.33%",
    left: "14.29%",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
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
    position: "absolute",
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
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.white,
  },
  feedbox: {
    backgroundColor: Color.turquoise,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  trackedlistname: {
    height: "70%",
    width: "80%",
    top: "15%",
    left: "10%",
  },
  trackediconPosition: {
    bottom: "10.71%",
    top: "53.57%",
    width: "28.57%",
    height: "35.71%",
    position: "absolute",
  },
  homefeedtracked: {
    top: "50.86%",
    bottom: "0.86%",
  },
  feedbox1: {
    left: 0,
    backgroundColor: Color.goldenrod,
    width: 350,
    height: 280,
    borderRadius: Border.br_mini,
  },
  eventbox: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  friendevent: {
    height: "90.91%",
    width: "93.94%",
    top: "4.55%",
    left: "3.03%",
  },
  eventlistbox: {
    top: "3.57%",
    bottom: "80.71%",
  },
  eventlistbox1: {
    top: "22.86%",
    bottom: "61.43%",
  },
  eventlistbox2: {
    top: "42.14%",
    bottom: "42.14%",
  },
  eventlistbox3: {
    top: "61.43%",
    bottom: "22.86%",
  },
  eventlistbox4: {
    top: "80.71%",
    bottom: "3.57%",
  },
  homefeedevents: {
    top: "0.86%",
    bottom: "50.86%",
  },
  homecontentcontainer: {
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
    textAlign: "right",
    top: "0%",
    height: "100%",
  },
  header: {
    height: 100,
  },
  home: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Home;
