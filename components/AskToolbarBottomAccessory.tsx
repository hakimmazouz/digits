import { Host, Text } from "@expo/ui/swift-ui";
import { View } from "react-native";
import { SearchBarPlacement } from "react-native-screens";

export default function AskToolbarBottomAccessory({
  placement,
}: {
  placement: "inline" | "regular";
}) {
  return (
    <Host
      style={{
        backgroundColor: "black",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{`Placement: ${placement}`}</Text>
    </Host>
  );
}
