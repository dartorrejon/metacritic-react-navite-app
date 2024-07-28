import { View, Text, Image, StyleSheet } from "react-native";
export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Text style={styles.score}>{game.score}</Text>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    marginTop: 7,
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    color: "#eee",
    marginTop: 5,
  },
  score: {
    fontSize: 24,
    color: "green",
    fontWeight: "bold",
  },
});
