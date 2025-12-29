import { ScrollView, StyleSheet, View, Pressable } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PEOPLE } from "../lib/data";
import {
  Button,
  Host,
  HStack,
  Image,
  List,
  Section,
  Spacer,
  Text,
} from "@expo/ui/swift-ui";

type Props = NativeStackScreenProps<RootStackParamList, "PeopleIndex">;

export default function People({ navigation }: Props) {
  return (
    <Host
      style={{ flex: 1 }}
      // contentContainerStyle={{ gap: 4, paddingHorizontal: 16 }}
    >
      <List>
        <Section title="Best Friends">
          {PEOPLE.slice(0, 4).map((person) => (
            <ListItem person={person} key={person.name} />
          ))}
        </Section>
        <Section title="Everyone">
          {PEOPLE.slice(4).map((person) => (
            <ListItem person={person} key={person.name} />
          ))}
        </Section>
      </List>
    </Host>
  );
}

const ListItem = ({ person }: { person: { name: string } }) => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.navigate("PersonDetails", person)}
      variant="link"
    >
      <HStack alignment="center">
        <Text>{person.name}</Text>
        <Spacer />
        <Image systemName="chevron.right" size={14} color="secondary" />
      </HStack>
    </Button>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
