const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Explore from "./screens/Explore";
import ExploreMid from "./screens/ExploreMid";
import ExploreLow from "./screens/ExploreLow";
import ExploreList from "./screens/ExploreList";
import Settings from "./screens/Settings";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Bubblegum Sans_regular": require("./assets/fonts/Bubblegum_Sans_regular.ttf"),
    Birthstone_regular: require("./assets/fonts/Birthstone_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExploreMid"
              component={ExploreMid}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExploreLow"
              component={ExploreLow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExploreList"
              component={ExploreList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
