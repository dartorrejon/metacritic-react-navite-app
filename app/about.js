import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";
import { Screen } from "../components/Screen";

export default function About() {
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "About",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <ScrollView>
        <Link asChild href="/">
          <Pressable style={{ paddingTop: 10 }}>
            {({ pressed }) => (
              <HomeIcon
                style={[{ color: "white" }, { opacity: pressed ? 0.5 : 1 }]}
              />
            )}
          </Pressable>
        </Link>
      </ScrollView>
    </Screen>
  );
}
