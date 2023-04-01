import React, { memo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import ListContainer from "./ListContainer";
import CategoryIcon from "./CategoryIcon";

const CategoryListContainer = memo(({ ellipse10 }) => {
  return (
    <View style={styles.listcontainer}>
      <ListContainer />
      <CategoryIcon iconTitle="Oscars" ellipse10={ellipse10} />
      <CategoryIcon
        categoryIconRight="5.71%"
        categoryIconLeft="57.14%"
        iconTitle="Best Ever"
        categoryIconTop="4.89%"
        categoryIconBottom="67.45%"
        ellipse10={ellipse10}
      />
      <CategoryIcon
        categoryIconRight="57.14%"
        categoryIconLeft="5.71%"
        iconTitle="Series"
        categoryIconTop="37.45%"
        categoryIconBottom="34.89%"
        ellipse10={ellipse10}
      />
      <CategoryIcon
        categoryIconRight="5.71%"
        categoryIconLeft="57.14%"
        iconTitle="By Individual"
        categoryIconTop="37.45%"
        categoryIconBottom="34.89%"
        ellipse10={ellipse10}
      />
      <CategoryIcon
        categoryIconRight="57.14%"
        categoryIconLeft="5.71%"
        iconTitle="Best In Genre"
        categoryIconTop="70%"
        categoryIconBottom="2.34%"
        ellipse10={ellipse10}
      />
      <CategoryIcon
        categoryIconRight="5.71%"
        categoryIconLeft="57.14%"
        iconTitle="Other Awards"
        categoryIconTop="70%"
        categoryIconBottom="2.34%"
        ellipse10={ellipse10}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  listcontainer: {
    position: "absolute",
    height: "81.03%",
    width: "97.22%",
    top: "17.24%",
    right: "1.39%",
    bottom: "1.72%",
    left: "1.39%",
  },
});

export default CategoryListContainer;
