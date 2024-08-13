import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
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
        <Text style={styles.titulo}>Sobre el Proyecto</Text>
        <Text style={styles.texto}>
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </Text>
        <Text style={styles.texto}>
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </Text>
        <Text style={styles.texto}>
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </Text>
        <Text style={styles.texto}>
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </Text>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  titulo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 12,
  },
  texto: {
    color: "#999",
    marginBottom: 7,
    fontSize: 18,
  },
});
