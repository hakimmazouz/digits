import { NavigationContainer } from "@react-navigation/native";

import RootStack from "./navigation/index";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
