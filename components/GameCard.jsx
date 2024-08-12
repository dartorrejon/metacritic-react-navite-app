import { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.slug}`}>
      <Pressable>
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View style={{ flexShrink: 1 }}>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text style={styles.description}>
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 700,
      delay: index * 300,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 42,
    backgroundColor: "#222",
    borderRadius: 10,
    columnGap: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
});
