import Overview from "../screens/Overview";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import Settings from "../screens/Settings";
import PeopleStack from "../navigation/people";
import AskToolbarBottomAccessory from "../components/AskToolbarBottomAccessory";
import { Text, View } from "react-native";

export type RootStackParamList = {
  Settings: undefined;
  Overview: undefined;
  People: undefined;
  PeopleIndex: undefined;
  PersonDetails: { name: string };
};
declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line
    interface RootParamList extends RootStackParamList {}
  }
}

const Tab = createNativeBottomTabNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarMinimizeBehavior: "onScrollDown",
        tabBarLabelStyle: { fontSize: 10 },
        tabBarActiveTintColor: "#00aa00",
        bottomAccessory: ({ placement }) => {
          return (
            <View style={{ padding: 16 }}>
              <Text>Placement: {placement}</Text>
            </View>
          );
        },
      }}
    >
      <Tab.Screen
        name="Overview"
        component={Overview}
        options={() => ({
          tabBarIcon: ({ focused }) => ({
            type: "sfSymbol",
            name: focused ? "house.fill" : "house",
          }),
        })}
      />
      <Tab.Screen
        name="People"
        component={PeopleStack}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) => ({
            type: "sfSymbol",
            name: focused ? "person.fill" : "person",
          }),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) => ({
            type: "sfSymbol",
            name: focused ? "gear.circle.fill" : "gear.circle",
          }),
        })}
      />
    </Tab.Navigator>
  );
}

export default RootStack;
