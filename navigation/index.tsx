import Overview from "../screens/Overview";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import Settings from "../screens/Settings";
import PeopleStack from "../navigation/people";
import AskToolbarBottomAccessory from "../components/AskToolbarBottomAccessory";
import { useColorScheme, View } from "react-native";
import { SymbolView } from "expo-symbols";
import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  withRepeat,
  Easing,
  runOnJS,
  useAnimatedReaction,
  interpolate,
} from "react-native-reanimated";
import { Host, ContextMenu, Button, Picker } from "@expo/ui/swift-ui";

const SUGGESTIONS = [
  "Top spenders this month...",
  "Book flight to NYC...",
  "New card for LinkedIn...",
  "Compare Q1 vs Q2 spend...",
  "Can I expense this?",
  "Who spent most on Uber?",
  "Can I eat banana pizza?",
  "Drop receipts...",
  "Add card for Slack...",
];

function ContextMenuComponent({children}: {children: React.ReactNode}){
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Host>
<ContextMenu>
  <ContextMenu.Items>
    <Button
      systemImage="photo.on.rectangle"
      onPress={() => console.log('Select photos')}>
      Select photos
    </Button>
    <Button
      variant="bordered"
      systemImage="doc.text"
      onPress={() => console.log('Select files')}>
      Select files
    </Button>
    <Button
      variant="glassProminent"
      systemImage="camera"
      onPress={() => console.log('Take photo')}>
      Take photo
    </Button>
    {/* <Picker
      label="Doggos"
      options={['very', 'veery', 'veeery', 'much']}
      variant="menu"
      selectedIndex={selectedIndex}
      onOptionSelected={({ nativeEvent: { index } }) => setSelectedIndex(index)}
    /> */}
  </ContextMenu.Items>
  <ContextMenu.Trigger>
    <View>
    {children}
    </View>
  </ContextMenu.Trigger>
</ContextMenu>
    </Host>
  );
}

const HOLD_DURATION = 3000;
const ROTATE_DURATION = 1050;
const CUBE_RADIUS = 11;


function SuggestionCarousel({ colorScheme }: { colorScheme: "light" | "dark" | null | undefined }) {
  const [renderKey, forceRender] = useState(0);
  const indicesRef = useRef({ current: 0, next: 1 });
  const cycleRef = useRef(0);
  const pendingReset = useRef(false);
  const textColor = colorScheme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)";

  // 0 = current visible, 1 = next visible
  const rotation = useSharedValue(0);

  const runCycle = useCallback(() => {
    rotation.value = withDelay(HOLD_DURATION, withTiming(1, {
      duration: ROTATE_DURATION,
      easing: Easing.inOut(Easing.cubic),
    }, (finished) => {
      if (finished) {
        runOnJS(advanceIndices)();
      }
    }));
  }, []);

  const advanceIndices = useCallback(() => {
    // Update indices synchronously
    cycleRef.current += 1;
    indicesRef.current = {
      current: cycleRef.current % SUGGESTIONS.length,
      next: (cycleRef.current + 1) % SUGGESTIONS.length,
    };
    // Mark that we need to reset rotation after render
    pendingReset.current = true;
    // Force re-render to pick up new text
    forceRender(n => n + 1);
  }, []);

  // Reset rotation ONLY after React has committed the new text, then schedule next
  useLayoutEffect(() => {
    if (pendingReset.current) {
      pendingReset.current = false;
      rotation.value = 0;
      // Schedule next cycle AFTER reset
      runCycle();
    }
  }, [renderKey, runCycle]);

  useEffect(() => {
    // Start first cycle
    runCycle();
  }, [runCycle]);

  // Current text: starts visible, rotates up and away
  const currentStyle = useAnimatedStyle(() => {
    const rotateX = interpolate(rotation.value, [0, 1], [0, -90]);
    const translateY = interpolate(rotation.value, [0, 1], [0, -CUBE_RADIUS]);
    const opacity = interpolate(rotation.value, [0, 0.5, 1], [1, 0.6, 0]);

    return {
      opacity,
      transform: [
        { perspective: 400 },
        { translateY },
        { rotateX: `${rotateX}deg` },
      ],
    };
  });

  // Next text: starts rotated below, rotates up into view
  const nextStyle = useAnimatedStyle(() => {
    const rotateX = interpolate(rotation.value, [0, 1], [90, 0]);
    const translateY = interpolate(rotation.value, [0, 1], [CUBE_RADIUS, 0]);
    const opacity = interpolate(rotation.value, [0, 0.5, 1], [0, 0.6, 1]);

    return {
      opacity,
      transform: [
        { perspective: 400 },
        { translateY },
        { rotateX: `${rotateX}deg` },
      ],
    };
  });

  return (
    <View style={{ height: 24, justifyContent: "center" }}>
      <Animated.Text 
        style={[
          { color: textColor, fontSize: 17, position: "absolute", left: 0 }, 
          currentStyle
        ]}
      >
        {SUGGESTIONS[indicesRef.current.current]}
      </Animated.Text>
      <Animated.Text 
        style={[
          { color: textColor, fontSize: 17, position: "absolute", left: 0 }, 
          nextStyle
        ]}
      >
        {SUGGESTIONS[indicesRef.current.next]}
      </Animated.Text>
    </View>
  );
}

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
            <View style={{ padding: 0, alignItems: "center", flex: 1, paddingHorizontal: 8, flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 8}}>
              <SuggestionCarousel colorScheme={colorScheme} />
              </View>
              <ContextMenuComponent>
              <View style={{ width: 36, height: 36, backgroundColor: colorScheme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)", borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
              <SymbolView
                name="plus"
                size={20}
                tintColor={colorScheme === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"}
                />
              </View>
                </ContextMenuComponent>
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
