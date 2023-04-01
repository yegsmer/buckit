import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import ListContainer from "./ListContainer";
import EventListBox from "./EventListBox";

const ListContainerLow = memo(() => {
  return (
    <View style={styles.listcontainerlow}>
      <ListContainer />
      <EventListBox
        eventListBoxTop="85%"
        eventListBoxBottom="4%"
        eventListBoxHeight="11%"
        friendEvent="2015: Spotlight"
      />
      <EventListBox
        eventListBoxTop="71.5%"
        eventListBoxBottom="17.5%"
        eventListBoxHeight="11%"
        friendEvent="2016: Moonlight"
      />
      <EventListBox
        eventListBoxTop="58%"
        eventListBoxBottom="31%"
        eventListBoxHeight="11%"
        friendEvent="2017: The Shape of Water"
      />
      <EventListBox
        eventListBoxTop="44.5%"
        eventListBoxBottom="44.5%"
        eventListBoxHeight="11%"
        friendEvent="2018: Green Book"
      />
      <EventListBox
        eventListBoxTop="31%"
        eventListBoxBottom="58%"
        eventListBoxHeight="11%"
        friendEvent="2019: Parasite"
      />
      <EventListBox
        eventListBoxTop="17.5%"
        eventListBoxBottom="71.5%"
        eventListBoxHeight="11%"
        friendEvent="2020: Nomadland"
      />
      <EventListBox
        eventListBoxTop="4%"
        eventListBoxBottom="85%"
        eventListBoxHeight="11%"
        friendEvent="2021: CODA"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  listcontainerlow: {
    position: "absolute",
    height: "68.97%",
    width: "97.22%",
    top: "30%",
    right: "1.39%",
    bottom: "1.03%",
    left: "1.39%",
  },
});

export default ListContainerLow;
