import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoogleAuth from "./auth/GoogleAuth";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Arrive!</Text>
      <GoogleAuth />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
