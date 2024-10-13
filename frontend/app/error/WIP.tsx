import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Emoji from "@/components/Emoji";

const WIP = () => {
  return (
    <LinearGradient colors={["#FFFFFF", "#F5E9FE"]} style={styles.container}>
      <Text style={styles.title}>Work In Progress</Text>
      <View style={styles.content}>
        <Emoji emoji="🔨" size={60} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WIP;
