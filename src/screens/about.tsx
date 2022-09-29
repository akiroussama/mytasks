import React from "react";
import { View, Text, } from "react-native";
import MyComponent from "../components/wilders";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyComponent></MyComponent>
    </View>
  );
}
  