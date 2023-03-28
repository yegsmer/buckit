import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={[styles.navbox, styles.navboxPosition]} />
        <View style={[styles.navbutton, styles.navbuttonPosition]}>
          <Image
            style={[
              styles.navbuttonChild,
              styles.iconItemLayout,
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
              styles.iconItemLayout,
              styles.navboxPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.newpage}>Explore</Text>
        </View>
      </View>
      <View style={styles.profilecontentcontainer}>
        <View
          style={[
            styles.contentinnercontainer,
            styles.twooptionsliderChildBorder,
          ]}
        />
        <View style={[styles.homefeedtracked, styles.homefeedtrackedPosition]}>
          <View style={[styles.feedbox, styles.feedboxPosition]} />
          <View
            style={[
              styles.trackedicon,
              styles.trackediconPosition3,
              styles.trackediconPosition4,
            ]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.iconItemLayout,
                styles.navboxPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.gramstad6FlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition2, styles.trackediconPosition3]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.iconItemLayout,
                styles.navboxPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.gramstad6FlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition1, styles.trackediconPosition3]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.iconItemLayout,
                styles.navboxPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.gramstad6FlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[
              styles.trackedicon3,
              styles.trackediconPosition,
              styles.trackediconPosition4,
            ]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.iconItemLayout,
                styles.navboxPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.gramstad6FlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition, styles.trackediconPosition2]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.iconItemLayout,
                styles.navboxPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.gramstad6FlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
          <View
            style={[styles.trackediconPosition, styles.trackediconPosition1]}
          >
            <Image
              style={[
                styles.navbuttonChild,
                styles.iconItemLayout,
                styles.navboxPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text
              style={[styles.trackedlistname, styles.gramstad6FlexBox]}
            >{`Oscar
Best Picture Nominees 2020 `}</Text>
          </View>
        </View>
        <View style={[styles.profileheaderbox, styles.homefeedtrackedPosition]}>
          <View style={[styles.homefeedbox, styles.navboxPosition]} />
          <Image
            style={[styles.portraitcontainerIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/portraitcontainer.png")}
          />
          <View style={styles.profileinfocontainer}>
            <View
              style={[styles.profileheaderbox1, styles.friendsboxChildPosition]}
            />
            <View style={styles.usernamebox}>
              <View style={[styles.usernameboxChild, styles.feedboxPosition]} />
              <Text style={[styles.gramstad6, styles.gramstad6FlexBox]}>
                Gramstad_6
              </Text>
            </View>
            <View style={styles.profilescoreicon}>
              <Image
                style={[
                  styles.navbuttonChild,
                  styles.iconItemLayout,
                  styles.navboxPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-7.png")}
              />
              <Image
                style={[styles.profilescoreiconItem, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-8.png")}
              />
              <Image
                style={[styles.profilescoreiconInner, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>620</Text>
            </View>
          </View>
          <View style={[styles.friendsbox, styles.friendsboxPosition]}>
            <View
              style={[styles.friendsboxChild, styles.friendsboxChildPosition]}
            />
            <Text style={[styles.friends, styles.textFlexBox]}>{`150
Friends`}</Text>
          </View>
          <View style={[styles.twooptionslider, styles.friendsboxPosition]}>
            <View
              style={[
                styles.twooptionsliderChild,
                styles.twooptionsliderChildBorder,
              ]}
            />
            <Image
              style={[styles.twooptionsliderItem, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Text style={[styles.newsFeed, styles.badgesFlexBox]}>
              News Feed
            </Text>
            <Text style={[styles.badges, styles.badgesFlexBox]}>Badges</Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.navbarPosition]}>
        <View style={[styles.navbox, styles.navboxPosition]} />
        <Image
          style={[styles.logoitboxIcon, styles.iconItemLayout]}
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
    bottom: "0%",
    left: "0%",
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
  iconItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  twooptionsliderChildBorder: {
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  homefeedtrackedPosition: {
    left: "1.39%",
    right: "1.39%",
    width: "97.22%",
    height: "48.28%",
    position: "absolute",
  },
  feedboxPosition: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  trackediconPosition3: {
    bottom: "53.57%",
    top: "10.71%",
    width: "28.57%",
    height: "35.71%",
    position: "absolute",
  },
  trackediconPosition4: {
    right: "68.57%",
    left: "2.86%",
  },
  gramstad6FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  trackediconPosition: {
    bottom: "10.71%",
    top: "53.57%",
    width: "28.57%",
    height: "35.71%",
    position: "absolute",
  },
  trackediconPosition2: {
    left: "35.71%",
    right: "35.71%",
  },
  trackediconPosition1: {
    left: "68.57%",
    right: "2.86%",
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
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    position: "absolute",
  },
  friendsboxPosition: {
    bottom: "1.79%",
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
  itFlexBox: {
    textAlign: "right",
    color: Color.black,
    position: "absolute",
  },
  navbox: {
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  navbuttonChild: {
    left: "0%",
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
    borderRadius: Border.br_mini,
  },
  feedbox: {
    backgroundColor: Color.turquoise,
    borderRadius: Border.br_mini,
  },
  trackedlistname: {
    height: "70%",
    width: "80%",
    top: "15%",
    left: "10%",
  },
  trackedicon: {
    left: "2.86%",
  },
  trackedicon3: {
    left: "2.86%",
  },
  homefeedtracked: {
    top: "50.86%",
    bottom: "0.86%",
  },
  homefeedbox: {
    borderRadius: Border.br_mini,
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
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
    borderRadius: Border.br_26xl,
    backgroundColor: Color.white,
  },
  gramstad6: {
    height: "60%",
    width: "75%",
    top: "20%",
    left: "12.5%",
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
    bottom: "29.29%",
    left: "48.57%",
    right: "2.86%",
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
    top: "22.5%",
  },
  friendsbox: {
    height: "28.57%",
    top: "69.64%",
    right: "55.43%",
    width: "41.71%",
    left: "2.86%",
  },
  twooptionsliderChild: {
    height: "76.99%",
    top: "-7.69%",
    bottom: "30.7%",
    borderRadius: Border.br_11xl,
    borderWidth: 5,
    left: "0%",
    right: "0%",
    borderStyle: "solid",
    width: "100%",
  },
  twooptionsliderItem: {
    height: "46.88%",
    width: "31.25%",
    top: "7.81%",
    right: "62.5%",
    bottom: "45.31%",
    left: "6.25%",
  },
  newsFeed: {
    left: "55%",
  },
  badges: {
    left: "0%",
  },
  twooptionslider: {
    height: "23.21%",
    width: "45.71%",
    top: "75%",
    right: "4.29%",
    left: "50%",
  },
  profileheaderbox: {
    top: "0.86%",
    bottom: "50.86%",
  },
  profilecontentcontainer: {
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
    top: 0,
    height: 100,
  },
  profile: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Profile;
