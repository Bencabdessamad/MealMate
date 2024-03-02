import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const currentDate = moment();
  const startOfWeek = currentDate.clone().startOf("week");
  const [date, setDate] = useState("");
  const [nextDate, setNextDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const navigation = useNavigation();

  const renderWeekDates = (startOfWeek) => {
    let weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = startOfWeek.clone().add(i, "days");
      const formattedDate = date.format("ddd DD");
      const isCurrentDate = date.isSame(currentDate, "days");
      weekDates.push(
        <View key={i} style={{ flexDirection: "row", marginBottom: 10 }}>
          <View
            style={[
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: isCurrentDate ? "#2B547E" : "white",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 11,
                fontWeight: "500",
                color: isCurrentDate ? "white" : "black",
              }}
            >
              {date.format("DD")}
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "500",
                color: isCurrentDate ? "white" : "black",
              }}
            >
              {date.format("ddd")}
            </Text>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate("Menu", {
                date: date.format("ddd") + "" + date.format("DD"),
              })
            }
            style={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: 8,
              padding: 10,
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: 12,
                color: "#B0CFDE",
                marginBottom: 5,
              }}
            >
              There is no Menu
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Pressable style={{ marginRight: 10 }}>
                <Ionicons name="copy" size={20} color="#007AFF" />
              </Pressable>
              <Pressable>
                <Ionicons name="trash-outline" size={20} color="#FF3B30" />
              </Pressable>
            </View>
          </Pressable>
        </View>
      );
    }
    return weekDates;
  };

  const renderWeeks = (numWeeks) => {
    let weeks = [];
    for (let i = 0; i < numWeeks; i++) {
      weeks.push(
        <View key={i} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
            {startOfWeek
              .clone()
              .add(i * 7, "days")
              .format("DD MMM")}
          </Text>
          {renderWeekDates(startOfWeek.clone().add(i * 7, "days"))}
        </View>
      );
    }
    return weeks;
  };

  return (
    <ScrollView style={{ marginTop: 50, paddingHorizontal: 12 }}>
      {renderWeeks(3)}
    </ScrollView>
  );
};

export default HomeScreen;
