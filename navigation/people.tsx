import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PeopleIndex from "../screens/PeopleIndex";
import PersonDetails from "../screens/PersonDetails";

const Stack = createNativeStackNavigator();

export default function PeopleStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name="PeopleIndex"
        component={PeopleIndex}
        options={{
          headerLargeTitleEnabled: true,
          headerTitle: "People",
        }}
      />
      <Stack.Screen
        name="PersonDetails"
        component={PersonDetails}
        options={{
          headerBackButtonDisplayMode: "minimal",
          headerTitleStyle: { color: "transparent" },
        }}
      />
    </Stack.Navigator>
  );
}
