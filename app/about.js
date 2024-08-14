import { Link, Stack } from "expo-router";
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
          Esta es una app desarrollada con Expo (Framework recomendado por React
          Native) 🚀
        </Text>
        <Text style={styles.texto}>
          Se basa en una Api piratona 🏴‍☠️ 😄 que se utiliza para poder consultar
          los datos de los juegos en la pagina de Metacritic.
        </Text>
        <Text style={styles.texto}>
          Quiero nombrar al señor Programador y Youtuber Midudev!💻🤓👍❗Gracias
          a el pude aprender sobre desarrollo para móviles y todo lo demás que
          hace falta para poder desarrollar este tipo de apps
        </Text>
        <Text style={styles.texto}>
          Por ultimo pude realizar el bundle e instalar la apk en mi celular.
          Funciona perfecto hasta el momento! 😻 Seguire aprendiendo mas sobre
          desarrolo movil con Expo por que me gusto bastante. FIN!
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
