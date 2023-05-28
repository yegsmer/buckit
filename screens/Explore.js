import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ContentInnerContainer from "../components/ContentInnerContainer";
import CategoryListContainer from "../components/CategoryListContainer";
import ContentHeaderContainer from "../components/ContentHeaderContainer";
import ListTitleContainerLarge from "../components/ListTitleContainerLarge";
import NavBar from "../components/NavBar";
import { Color, Padding } from "../GlobalStyles";

const Explore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.explore}>
      <Header
        headerTop="unset"
        headerLeft="unset"
        headerWidth="unset"
        headerHeight="unset"
        headerRight="unset"
        headerBottom="unset"
      />
      <View style={styles.explorecontentcontainer}>
        <ContentInnerContainer />
        <CategoryListContainer
          ellipse10={`https://d1xzdqg8s8ggsr.cloudfront.net/641e27fa82031fcae6c8a9e7/9af59b18-210a-46d1-ae7e-c926bec91f5c_1679698113567531602?Expires=-62135596800&Signature=dVP~Msji98oJ-e6w0OilZST1aB7ZFfoxeiUbkdR9cHHL2BMboNpyeZ5F5lx3E-Mpz3W4SezGfE2~Xkr7XYeaakCuV8ki~cK531bJB0Ffr9QpCAB7mlPZ2Jprb99U0zmDvDtk3bhboAj~-pz42BGtLJ7OSPxil331yOJs6fJoE7j~vtOrPmn4nAYM1bbC9l5COzxck5ukVZMnIMAfvkZw66B6a4oeCYbOcrHqtNB2E2D2TfMKZ-~IOIIuwvYwHMdGaeVNIxxwbtdp4yojROTGjl5TevMIqn4HKLefklCnGGhgeKrK1qvCZG1LndKjifTjdmjjfHVTtQzFK5cirCVpnQ__&Key-Pair-Id=K1P54FZWCHCL6J`}
        />
        <View style={styles.exploreheaderboxlarge}>
          <ContentHeaderContainer
            contentHeaderContainerHeight="100%"
            contentHeaderContainerBottom="0%"
          />
          <ListTitleContainerLarge />
        </View>
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
  exploreheaderboxlarge: {
    position: "absolute",
    height: "17.24%",
    width: "97.22%",
    top: "0%",
    right: "1.39%",
    bottom: "82.76%",
    left: "1.39%",
  },
  explorecontentcontainer: {
    alignSelf: "stretch",
    height: 580,
    marginTop: 20,
  },
  explore: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default Explore;
