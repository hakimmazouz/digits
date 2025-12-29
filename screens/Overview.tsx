import { StyleSheet, View, Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Overview">;

export default function Overview({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Overview</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
