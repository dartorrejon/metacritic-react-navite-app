import { Stack, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Screen } from "../components/Screen";
import { Score } from "../components/Score";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const { game_slug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (game_slug) {
      getGameDetails(game_slug).then(setGameInfo);
    }
  }, [game_slug]);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: `${game_slug}`,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View style={styles.slugContainer}>
              <Image
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294, borderRadius: 10 }}
              />
              <Score
                score={gameInfo.score}
                maxScore={100}
                stylesAdded={styles.slugScore}
                textStyles={styles.slugScoreText}
              />
              <Text style={styles.slugTitle}>{gameInfo.title}</Text>
              <Text style={styles.slugDescription}>{gameInfo.description}</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  slugContainer: {
    alignItems: "center",
    rowGap: 18,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  slugTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  slugDescription: {
    fontSize: 18,
    color: "#777",
    lineHeight: 25,
  },
  slugScore: {
    width: 45,
    height: 45,
  },
  slugScoreText: {
    fontSize: 25,
  },
});
