import { useRoute } from "@react-navigation/native";
import { getPerson, PEOPLE } from "../lib/data";

import {
  Button,
  Circle,
  Form,
  GlassEffectContainer,
  Host,
  HStack,
  Image,
  Spacer,
  Switch,
  Text,
  VStack,
  ZStack,
} from "@expo/ui/swift-ui";
import {
  background,
  clipShape,
  cornerRadius,
  foregroundStyle,
  frame,
  glassEffect,
  scaleEffect,
} from "@expo/ui/swift-ui/modifiers";
import { useState } from "react";

export default function PersonDetails() {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const route = useRoute();
  const person = getPerson({ name: route.params?.name });

  return (
    <Host style={{ flex: 1, gap: 40 }}>
      <VStack>
        <VStack alignment="center" spacing={20}>
          <ZStack modifiers={[background("#aaaacc"), cornerRadius(90)]}>
            {/* <Circle
            modifiers={[
              frame({ width: 160, height: 160 }),
              foregroundStyle("#aaaacc"),
            ]}
          /> */}
            <Image
              systemName="person.crop.circle"
              color="white"
              size={140}
              modifiers={[scaleEffect(1.4)]}
            />
          </ZStack>
          <Text size={32} weight="bold">
            {person!.name}
          </Text>
        </VStack>
        {/* <Form>
          <HStack spacing={8}>
            <Text>Show options</Text>
            <Spacer />
            <Switch value={optionsVisible} onValueChange={setOptionsVisible} />
          </HStack>
        </Form> */}
        <ZStack>
          <GlassEffectContainer spacing={40}>
            <HStack spacing={10}>
              <Button onPress={() => {}} variant="glass">
                <Image
                  systemName="ellipsis"
                  modifiers={[frame({ width: 44, height: 44 })]}
                />
              </Button>
              <Button onPress={() => {}} variant="glass">
                <Image
                  systemName="pencil"
                  modifiers={[frame({ width: 44, height: 44 })]}
                />
              </Button>
              {/* <Button variant="glass"> */}
              {/* <Image
                systemName="pencil"
                modifiers={[frame({ width: 44, height: 44 }), glassEffect()]}
              /> */}
              {/* </Button> */}
            </HStack>
          </GlassEffectContainer>
        </ZStack>
      </VStack>
    </Host>
  );
}
