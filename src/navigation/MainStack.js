import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// screens
import { PlantDetail } from "../screens";
// tab for
import MainTab from "./MainTab";

const Stack = createStackNavigator();

export default MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Dashboard"}
    >
      <Stack.Screen name="Dashboard" component={MainTab} />
      <Stack.Screen name="PlantDetail" component={PlantDetail} />
    </Stack.Navigator>
  );
};
