import React from "react";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";

const PlantDetail = ({ navigation }) => {
  // Requirements Bar
  const [requirementsBar, setRequirementsBar] = useState([
    {
      id: 0,
      icon: icons.sun,
      barPercentage: "50%",
    },
    {
      id: 1,
      icon: icons.drop,
      barPercentage: "30%",
    },
    {
      id: 2,
      icon: icons.temperature,
      barPercentage: "90%",
    },
    {
      id: 3,
      icon: icons.garden,
      barPercentage: "20%",
    },
    {
      id: 4,
      icon: icons.seed,
      barPercentage: "70%",
    },
    {
      id: 5,
      icon: icons.drop,
      barPercentage: "30%",
    },
    {
      id: 6,
      icon: icons.temperature,
      barPercentage: "90%",
    },
    {
      id: 7,
      icon: icons.garden,
      barPercentage: "20%",
    },
    {
      id: 8,
      icon: icons.seed,
      barPercentage: "70%",
    },
  ]);

  // requirements detaisl
  const [requirementsDetail, setRequirementsDetail] = useState([
    { id: 0, icon: icons.sun, label: "Sunlight", detail: "15*C" },
    { id: 1, icon: icons.drop, label: "Water", detail: "250ML Daily" },
    { id: 2, icon: icons.garden, label: "Soli", detail: "3 Kg" },
    { id: 3, icon: icons.seed, label: "Fertilizer", detail: "150 Mg" },

    { id: 4, icon: icons.sun, label: "Sunlight", detail: "15*C" },
    { id: 5, icon: icons.drop, label: "Water", detail: "250ML Daily" },
    { id: 6, icon: icons.garden, label: "Soli", detail: "3 Kg" },
    { id: 7, icon: icons.seed, label: "Fertilizer", detail: "150 Mg" },
    { id: 8, icon: icons.drop, label: "Water", detail: "250ML Daily" },
    { id: 9, icon: icons.garden, label: "Soli", detail: "3 Kg" },
    { id: 10, icon: icons.seed, label: "Fertilizer", detail: "150 Mg" },
  ]);

  // MAIn return function
  return (
    <View style={{ flex: 1 }}>
      {/* banner photo -- top wrapper ----------------------------------------------------------------------------------------------------------------------------------------- */}
      <View style={{ height: "35%" }}>
        <Image
          source={images.bannerBg}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        />
      </View>

      {/* banner photo requiremnets -- middle wrapper ----------------------------------------------------------------------------------------------------------------------------- */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          paddingVertical: SIZES.padding,
        }}
      >
        {/* requiremnts text =========================================================================== */}
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            fontSize: SIZES.h1,
            color: COLORS.secondary,
          }}
        >
          Requirements
        </Text>
        {/* requiremnets bar view ======================================================================== */}

        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={requirementsBar}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <View
                key={`bar-${index}`}
                style={{
                  height: 60,
                  marginHorizontal: 15,
                }}
              >
                {/* Requiremnts Bar img */}
                <View
                  style={{
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                  }}
                >
                  <Image
                    source={item.icon}
                    resizeMode="cover"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: COLORS.secondary,
                    }}
                  />
                </View>
                {/* Requiremenst img Bar  */}
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.gray,
                  }}
                ></View>
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: item.barPercentage,
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.primary,
                  }}
                ></View>
              </View>
            )}
          />
        </View>
        {/* Requirements details view =================================================================================== */}
        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            flex: 2,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={requirementsDetail}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <View
                key={`detail-${index}`}
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: SIZES.base,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    source={item.icon}
                    resizeMode="cover"
                    style={{
                      tintColor: COLORS.secondary,
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: SIZES.base,
                      color: COLORS.secondary,
                      fontSize: SIZES.h2,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: SIZES.base,
                      color: COLORS.gray,
                      fontSize: SIZES.h3,
                    }}
                  >
                    {item.detail}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>

        {/* bottom view  */}
        <View
          style={{
            flex: 0.5,
            paddingVertical: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* action button view  */}
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              backgroundColor: COLORS.primary,
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text style={{ fontSize: SIZES.h2, color: COLORS.white }}>
              Take Action
            </Text>
            <Image
              source={icons.chevron}
              resizeMode="contain"
              style={{ marginLeft: SIZES.padding, width: 20, height: 20 }}
            />
          </TouchableOpacity>
          {/* right view  */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{ flex: 1, color: COLORS.secondary, fontSize: SIZES.h3 }}
            >
              Almost 2 weeks of growing time
            </Text>
            <Image
              source={icons.downArrow}
              style={{
                tintColor: COLORS.secondary,
                marginLeft: SIZES.base,
                width: 20,
                height: 20,
              }}
            />
          </View>
        </View>
      </View>
      {/* header back button and right icon ------------------------------------------------------------------------------------------------------------------------ */}
      <View
        style={{
          position: "absolute",
          top: 50,
          left: SIZES.padding,
          right: SIZES.padding,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={icons.back}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlantDetail;
