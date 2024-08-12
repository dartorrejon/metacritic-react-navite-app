import { View, Text, StyleSheet } from "react-native";
let bStyles = "";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40) return "red";

    if (percentage < 98) return "yellow";

    return "green";
  };
  bStyles = getColors();
  return (
    <View style={[styles.bScore, { backgroundColor: bStyles }]}>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    color: "#fff",
  },
  bScore: {
    height: 35,
    width: 35,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
