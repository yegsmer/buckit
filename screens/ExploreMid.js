import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import ContentInnerContainer from "../components/ContentInnerContainer";
import CategoryListContainer from "../components/CategoryListContainer";
import ContentHeaderContainer from "../components/ContentHeaderContainer";
import ListTitleContainerSmall from "../components/ListTitleContainerSmall";
import Header from "../components/Header";
import { Color } from "../GlobalStyles";

const ExploreMid = () => {
  return (
    <View style={styles.exploremid}>
      <NavBar
        newPage="Home"
        ellipse2={require("../assets/ellipse-2.png")}
        newPage1="Profile"
        navBarTop="85.31%"
        navBarLeft="1.28%"
        navBarWidth="97.44%"
        navBarHeight="14.69%"
        navBarRight="1.28%"
        navBarBottom="0%"
      />
      <View style={styles.exploremidcontentcontainer}>
        <ContentInnerContainer />
        <CategoryListContainer
          ellipse10={`https://d1xzdqg8s8ggsr.cloudfront.net/641e27fa82031fcae6c8a9e7/9af59b18-210a-46d1-ae7e-c926bec91f5c_1679698113567531602?Expires=-62135596800&Signature=dVP~Msji98oJ-e6w0OilZST1aB7ZFfoxeiUbkdR9cHHL2BMboNpyeZ5F5lx3E-Mpz3W4SezGfE2~Xkr7XYeaakCuV8ki~cK531bJB0Ffr9QpCAB7mlPZ2Jprb99U0zmDvDtk3bhboAj~-pz42BGtLJ7OSPxil331yOJs6fJoE7j~vtOrPmn4nAYM1bbC9l5COzxck5ukVZMnIMAfvkZw66B6a4oeCYbOcrHqtNB2E2D2TfMKZ-~IOIIuwvYwHMdGaeVNIxxwbtdp4yojROTGjl5TevMIqn4HKLefklCnGGhgeKrK1qvCZG1LndKjifTjdmjjfHVTtQzFK5cirCVpnQ__&Key-Pair-Id=K1P54FZWCHCL6J`}
        />
        <View style={styles.pageheaderboxsmall}>
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
          <Image
            style={styles.backarrowIcon}
            resizeMode="cover"
            source={require("../assets/backarrow.png")}
          />
        </View>
      </View>
      <Header
        logoItBox={require("../assets/logoitbox.png")}
        headerTop="0%"
        headerLeft="1.28%"
        headerWidth="97.44%"
        headerHeight="11.85%"
        headerRight="1.28%"
        headerBottom="88.15%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backarrowIcon: {
    height: "65.73%",
    width: "23.72%",
    top: "20.47%",
    right: "77.42%",
    bottom: "13.79%",
    left: "-1.14%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pageheaderboxsmall: {
    height: "17.24%",
    width: "97.22%",
    top: "0%",
    right: "1.39%",
    bottom: "82.76%",
    left: "1.39%",
    position: "absolute",
  },
  exploremidcontentcontainer: {
    top: 120,
    left: 15,
    width: 360,
    height: 580,
    position: "absolute",
  },
  exploremid: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ExploreMid;
