import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PlantDetail = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>PlantDetail</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PlantDetail;
