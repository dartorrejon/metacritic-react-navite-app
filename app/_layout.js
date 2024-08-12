import { Link, Slot, Stack } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CircleInfoIcon } from "../components/Icons";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View style={styles.layu}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                {({ pressed }) => (
                  <CircleInfoIcon
                    style={[{ color: "white" }, { opacity: pressed ? 0.5 : 1 }]}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}

//este es un comentario!
const styles = StyleSheet.create({
  layu: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
