import React from "react";
import { Image, Text, View } from "react-native";
// bottom tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// constants
import { COLORS, icons, SIZES } from "../constants";
// screen
import { Home } from "../screens";

const Tab = createBottomTabNavigator();

export default MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          // used switch for route name
          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.flash}
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case "Box":
              return (
                <Image
                  source={icons.cube}
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case "Camera":
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: COLORS.primary,
                  }}
                >
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={icons.camera}
                    resizeMode="cover"
                  />
                </View>
              );
            case "Search":
              return (
                <Image
                  source={icons.search}
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case "Favourite":
              return (
                <Image
                  source={icons.heartGreenOutline}
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favourite" component={Home} />
    </Tab.Navigator>
  );
};
