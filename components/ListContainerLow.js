import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import ListContainer from "./ListContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ListContainerLow = memo(() => {
  return (
    <View style={styles.listcontainerlow}>
      <ListContainer />
      <View style={styles.entryverticalscrollviewsmall}>
        <View style={styles.visbleentryverticalscrollviews}>
          <View style={[styles.eventlistbox, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox1, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox2, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox3, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox4, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox5, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox6, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox7, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox8, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox9, styles.eventlistboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
          <View style={[styles.eventlistbox10, styles.eventboxPosition]}>
            <View style={[styles.eventbox, styles.eventboxPosition]} />
            <Text
              style={styles.friendevent}
            >{`{User} completed {List_name} list`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  eventlistboxPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    height: "7.53%",
    position: "absolute",
  },
  eventboxPosition: {
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  eventbox: {
    height: "100%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#f4d152",
    borderWidth: 3,
    bottom: "0%",
  },
  friendevent: {
    height: "90.91%",
    width: "93.94%",
    top: "4.55%",
    left: "3.03%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bubblegumSansRegular,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  eventlistbox: {
    top: "92.47%",
    bottom: "0%",
  },
  eventlistbox1: {
    top: "83.22%",
    bottom: "9.25%",
  },
  eventlistbox2: {
    top: "73.97%",
    bottom: "18.49%",
  },
  eventlistbox3: {
    top: "64.73%",
    bottom: "27.74%",
  },
  eventlistbox4: {
    top: "55.48%",
    bottom: "36.99%",
  },
  eventlistbox5: {
    top: "46.23%",
    bottom: "46.23%",
  },
  eventlistbox6: {
    top: "36.99%",
    bottom: "55.48%",
  },
  eventlistbox7: {
    top: "27.74%",
    bottom: "64.73%",
  },
  eventlistbox8: {
    top: "18.49%",
    bottom: "73.97%",
  },
  eventlistbox9: {
    top: "9.25%",
    bottom: "83.22%",
  },
  eventlistbox10: {
    bottom: "92.47%",
    height: "7.53%",
    top: "0%",
  },
  visbleentryverticalscrollviews: {
    top: 0,
    left: 0,
    width: 330,
    height: 584,
    position: "absolute",
  },
  entryverticalscrollviewsmall: {
    height: "93.25%",
    width: "94.29%",
    top: "4.75%",
    right: "2.86%",
    bottom: "2%",
    left: "2.86%",
    position: "absolute",
  },
  listcontainerlow: {
    height: "68.97%",
    width: "97.22%",
    top: "30%",
    right: "1.39%",
    bottom: "1.03%",
    left: "1.39%",
    position: "absolute",
  },
});

export default ListContainerLow;
