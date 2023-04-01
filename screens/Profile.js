import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import NavBar from "../components/NavBar";
import ContentInnerContainer from "../components/ContentInnerContainer";
import HomeFeedTracked from "../components/HomeFeedTracked";
import Header from "../components/Header";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <NavBar
        newPage="Home"
        ellipse2={require("../assets/ellipse-2.png")}
        newPage1="Explore"
        navBarTop={720}
        navBarLeft={5}
        navBarWidth={380}
        navBarHeight={124}
        navBarRight="unset"
        navBarBottom="unset"
      />
      <View style={styles.profilecontentcontainer}>
        <ContentInnerContainer />
        <HomeFeedTracked />
        <View style={styles.profileheaderbox}>
          <View style={[styles.homefeedbox, styles.childPosition1]} />
          <Image
            style={[styles.portraitcontainerIcon, styles.itemLayout]}
            resizeMode="cover"
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
                style={[styles.profilescoreiconChild, styles.itemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-7.png")}
              />
              <Image
                style={[styles.profilescoreiconItem, styles.itemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-8.png")}
              />
              <Image
                style={[styles.profilescoreiconInner, styles.itemLayout]}
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
            <View style={[styles.twooptionsliderChild, styles.childPosition]} />
            <Image
              style={[styles.twooptionsliderItem, styles.itemLayout]}
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
      <Header
        logoItBox={`https://d1xzdqg8s8ggsr.cloudfront.net/641f40f45e339deadf1d2973/ae184c1f-4283-4d3c-825d-157a61c8a24b_1679976316790554239?Expires=-62135596800&Signature=dOqfBpzfk9EJ4RBPl8nJw7IZ7aeDOXzqbFAuGRn6rVIAaeTkdcFNFMsrtDtw8OmbXouD~PeoSJTMqYSywtSlZX0NaakDUXMjFDJIXBW6bFuM5nLTz~GTdY4nJ5L7xIGgLwgJ7KWkc9mRhPOIpm1~ESbdYH48xJbT2w9x6Es6LUspw7AWcNwUQMvRjN9JGYGR8hlYvGcNmkkmlh92N6ntnSZ4hw4MJBPIoQw7MbU2s1kNGjwU8ZaLecXVBmv4FvWBCBFRQ6N~lyIfaeCM2EOo8EJdigYyCaCw-Gm1o9AiTlDYlsHYeg1Zsa2iIRW~pJXnromnlB1OSwq9hHNsBAjh8g__&Key-Pair-Id=K1P54FZWCHCL6J`}
        headerTop={0}
        headerLeft={5}
        headerWidth={380}
        headerHeight={100}
        headerRight="unset"
        headerBottom="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  itemLayout: {
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
  childPosition: {
    borderColor: "#000",
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
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
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  homefeedbox: {
    borderRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
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
    borderWidth: 1,
    borderRadius: Border.br_26xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderColor: "#000",
    borderStyle: "solid",
  },
  gramstad6: {
    height: "60%",
    width: "75%",
    top: "20%",
    left: "12.5%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bubblegumSansRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
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
    top: "0%",
    height: "100%",
    right: "0%",
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
    left: "2.86%",
    width: "41.71%",
  },
  twooptionsliderChild: {
    height: "76.99%",
    top: "-7.69%",
    bottom: "30.7%",
    borderRadius: Border.br_11xl,
    borderWidth: 5,
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
    height: "48.28%",
    width: "97.22%",
    top: "0.86%",
    right: "1.39%",
    bottom: "50.86%",
    left: "1.39%",
    position: "absolute",
  },
  profilecontentcontainer: {
    top: 120,
    left: 15,
    width: 360,
    height: 580,
    position: "absolute",
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
