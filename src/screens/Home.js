import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
  // Dummy New Plants Data
  const [newPlants, setNewPlants] = useState([
    {
      id: 0,
      img: images.plant1,
      name: "Plant1",
      favourite: false,
    },
    {
      id: 1,
      img: images.plant2,
      name: "Plant2",
      favourite: true,
    },
    {
      id: 2,
      img: images.plant3,
      name: "Plant3",
      favourite: false,
    },
    {
      id: 3,
      img: images.plant4,
      name: "Plant4",
      favourite: true,
    },
    {
      id: 4,
      img: images.plant2,
      name: "Plant5",
      favourite: false,
    },
  ]);

  // Dummy Friends list
  const [firendsList, setFriendsList] = useState([
    { id: 0, img: images.profile1 },
    { id: 1, img: images.profile2 },
    { id: 2, img: images.profile3 },
    { id: 3, img: images.profile4 },
    { id: 4, img: images.profile5 },
  ]);

  // render for Added friends list
  const renderFriendsComponent = () => {
    if (firendsList.length == 0) {
      return <View></View>;
    } else if (firendsList.length <= 3) {
      return firendsList.map((item, index) => (
        <View
          key={`friend-${index}`}
          style={index == 0 ? {} : { marginLeft: -20 }}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: COLORS.primary,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {firendsList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : { marginLeft: -20 }}
                >
                  <Image
                    source={item.img}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}
          <Text
            style={{
              marginLeft: 5,
              color: COLORS.secondary,
              fontSize: SIZES.body3,
            }}
          >
            +{firendsList.length - 3} more
          </Text>
        </View>
      );
    }
  };

  // MAIN Component
  return (
    <View style={{ flex: 1 }}>
      {/* top wrapper -- NEW plants ------------------------------------------------------------------------------------------------------------------------------ */}
      <View style={{ height: "30%", backgroundColor: COLORS.white }}>
        {/* top subContainer */}
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}
        >
          {/* top subSubContainer */}
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}
          >
            {/* new plants and focus icon */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: COLORS.white, fontSize: 18 }}>
                New Plants
              </Text>
              <TouchableOpacity>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
            {/* new plants flatList */}
            <View style={{ marginTop: SIZES.base }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={
                  ({ item, index }) => (
                    // renderNewPlants = (item, index) => {
                    // return (
                    <View
                      key={`plant-${index}`}
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: SIZES.base,
                      }}
                    >
                      {/* image */}
                      <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                          width: SIZES.width * 0.23,
                          height: "82%",
                          borderRadius: 15,
                        }}
                      />
                      {/* name plant */}
                      <View
                        style={{
                          position: "absolute",
                          bottom: "17%",
                          right: 0,
                          backgroundColor: COLORS.primary,
                          paddingHorizontal: SIZES.base,
                          borderTopLeftRadius: 10,
                          borderBottomLeftRadius: 10,
                        }}
                      >
                        <Text
                          style={{ color: COLORS.white, fontSize: SIZES.body4 }}
                        >
                          {item.name}
                        </Text>
                      </View>
                      {/* favorites */}
                      <View
                        style={{ position: "absolute", top: "15%", left: 7 }}
                      >
                        <Image
                          source={
                            item.favourite
                              ? icons.heartRed
                              : icons.heartGreenOutline
                          }
                          style={{ width: 20, height: 20 }}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  )
                  // );
                  // }
                }
              />
            </View>
          </View>
        </View>
      </View>

      {/* middle wrapper -- TODAY share---------------------------------------------------------------------------------------------------------------------------------------- */}
      <View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
        {/* middle subContainer */}
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}
        >
          {/* middle subSubContainer */}
          <View
            style={{
              marginTop: SIZES.font,
              marginHorizontal: SIZES.padding,
              flex: 1,
            }}
          >
            {/* today's share and See all text view  */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: "10%",
              }}
            >
              <Text style={{ fontSize: SIZES.h2, color: COLORS.secondary }}>
                Today's Share
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: COLORS.secondary, fontSize: SIZES.body3 }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            {/* plants view */}
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                paddingVertical: SIZES.font,
              }}
            >
              {/* today share plant view left */}
              <View
                style={{
                  flex: 1,
                }}
              >
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => navigation.navigate("PlantDetail")}
                >
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, marginTop: SIZES.font }}
                  onPress={() => navigation.navigate("PlantDetail")}
                >
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />
                </TouchableOpacity>
              </View>
              {/* today share plant view right */}
              <View style={{ flex: 1.3 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    marginLeft: SIZES.font,
                  }}
                  onPress={() => navigation.navigate("PlantDetail")}
                >
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* bottom wrapper -- ADD friends ---------------------------------------------------------------------------------------------------------------------------------------- */}
      <View style={{ height: "20%" }}>
        {/* bottom subContainer  */}
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
          {/* added friend and total text view */}
          <View
            style={{
              flex: 1,
              marginTop: SIZES.radius,
              marginHorizontal: SIZES.padding,
            }}
          >
            <Text style={{ fontSize: SIZES.h2, color: COLORS.secondary }}>
              Added Friends
            </Text>
            <Text style={{ fontSize: SIZES.body3, color: COLORS.secondary }}>
              {firendsList.length} Total
            </Text>
            {/* showing firends images and friends  */}
            <View style={{ flexDirection: "row", height: "60%" }}>
              <View
                style={{
                  flex: 1.3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {renderFriendsComponent()}
              </View>
              {/* add new friend button  */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{ color: COLORS.secondary, fontSize: SIZES.body3 }}
                >
                  Add New
                </Text>
                {/* add button  */}
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.base,
                    width: 35,
                    height: 35,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.gray,
                  }}
                >
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
