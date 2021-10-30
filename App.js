import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
// Navigator
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
