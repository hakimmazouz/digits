import { StyleSheet, View, Text, ScrollView, useColorScheme } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type Props = NativeStackScreenProps<RootStackParamList, "Overview">;

export default function Overview({ navigation }: Props) {
  const backgroundColor = useColorScheme() === "dark" ? "#000000" : "#eee";
  const tintColor = useColorScheme() === "dark" ? "lime" : "lightblue";
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={[backgroundColor, tintColor, backgroundColor]} style={styles.gradient} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: 5000,
  },
});