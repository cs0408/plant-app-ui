import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate("PlantDetail")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
