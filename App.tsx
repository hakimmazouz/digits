import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

import RootStack from "./navigation/index";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
}
