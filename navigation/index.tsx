import Overview from "../screens/Overview";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import Settings from "../screens/Settings";
import PeopleStack from "../navigation/people";
import AskToolbarBottomAccessory from "../components/AskToolbarBottomAccessory";
import { Text, useColorScheme, View } from "react-native";

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
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarMinimizeBehavior: "onScrollDown",
        tabBarLabelStyle: { fontSize: 10 },
        tabBarActiveTintColor: colorScheme === "dark" ? "white" : "black",
        bottomAccessory: ({ placement }) => {
          return (
            <View style={{ padding: 16 }}>
              <Text style={{ color: colorScheme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)" }}>Ask me...</Text>
            </View>
          );
        },
      }}
    >
      <Tab.Screen
        name="Overview"
        component={Overview}
        options={() => ({
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => ({
            type: "sfSymbol",
            name: focused ? "circle.inset.filled" : "circle",
          }),
        })}
      />
      <Tab.Screen
        name="People"
        component={PeopleStack}
        options={({ navigation }) => ({
          tabBarLabel: "Expenses",
          tabBarIcon: ({ focused }) => ({
            type: "sfSymbol",
            name: focused ? "arrow.down.circle.fill" : "arrow.down.circle",
          }),
        })}
      />
         <Tab.Screen
        name="PeopleIndex"
        component={PeopleStack}
        options={({ navigation }) => ({
          tabBarLabel: "Cards",
          tabBarIcon: ({ focused }) => ({
            type: "sfSymbol",
            name: focused ? "creditcard.circle.fill" : "creditcard.circle",
          }),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={({ navigation }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => ({
            type: "sfSymbol",
            name: focused ? "person.crop.circle.fill" : "person.crop.circle",
          }),
        })}
      />
    </Tab.Navigator>
  );
}

export default RootStack;
