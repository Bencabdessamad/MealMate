import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const MenuScreen = () => {
  const route = useRoute();
  const [option, setOption] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backText}>Back</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{route?.params.date}</Text>
        </View>
        <Text style={styles.deleteText}>Delete</Text>
      </View>

      <View style={styles.menuContainer}>
        <Pressable
          style={[
            styles.menuItem,
            option === "Breakfast" && styles.selectedMenuItem,
          ]}
          onPress={() => setOption("Breakfast")}
        >
          <Text
            style={[
              styles.menuText,
              option === "Breakfast" && styles.selectedMenuText,
            ]}
          >
            Breakfast
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.menuItem,
            option === "Lunch" && styles.selectedMenuItem,
          ]}
          onPress={() => setOption("Lunch")}
        >
          <Text
            style={[
              styles.menuText,
              option === "Lunch" && styles.selectedMenuText,
            ]}
          >
            Lunch
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.menuItem,
            option === "Dinner" && styles.selectedMenuItem,
          ]}
          onPress={() => setOption("Dinner")}
        >
          <Text
            style={[
              styles.menuText,
              option === "Dinner" && styles.selectedMenuText,
            ]}
          >
            Dinner
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F0F0F0",
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
    marginRight: "auto",
  },
  dateContainer: {
    flex: 1,
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  deleteText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF3B30",
    marginLeft: "auto",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 2,
    marginHorizontal: 4,
  },
  selectedMenuItem: {
    backgroundColor: "#2B547E",
  },
  menuText: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  selectedMenuText: {
    color: "white",
  },
});
