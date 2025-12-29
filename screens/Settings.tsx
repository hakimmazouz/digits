import {
  Button,
  Form,
  Host,
  HStack,
  Image,
  Section,
  Spacer,
  Switch,
  Text,
} from "@expo/ui/swift-ui";
import { background, clipShape, frame } from "@expo/ui/swift-ui/modifiers";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function Settings() {
  const [isAirplaneMode, setIsAirplaneMode] = useState(true);

  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
        <Section>
          <HStack spacing={8}>
            <Image
              systemName="airplane"
              color="white"
              size={18}
              modifiers={[
                frame({ width: 28, height: 28 }),
                background("#ffa500"),
                clipShape("roundedRectangle"),
              ]}
            />
            <Text>Airplane Mode</Text>
            <Spacer />
            <Switch value={isAirplaneMode} onValueChange={setIsAirplaneMode} />
          </HStack>

          <Button>
            <HStack spacing={8}>
              <Image
                systemName="wifi"
                color="white"
                size={18}
                modifiers={[
                  frame({ width: 28, height: 28 }),
                  background("#007aff"),
                  clipShape("roundedRectangle"),
                ]}
              />
              <Text color="primary">Wi-Fi</Text>
              <Spacer />
              <Image systemName="chevron.right" size={14} color="secondary" />
            </HStack>
          </Button>
        </Section>
      </Form>
    </Host>
  );
}
