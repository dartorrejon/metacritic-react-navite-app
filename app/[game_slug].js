import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
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
            <View>
              <Image
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text style={{ color: "white" }}>{gameInfo.title}</Text>
              <Text style={{ color: "white" }}>{gameInfo.description}</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
