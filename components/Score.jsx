import { View, Text, StyleSheet } from "react-native";
let bStyles = "";

export function Score({ score, maxScore, stylesAdded, textStyles }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40)
      return { bColor: "red", tColor: "#fff", fWeigth: "bold" };

    if (percentage < 98)
      return { bColor: "yellow", tColor: "#000", fWeigth: "bold" };

    return { bColor: "green", tColor: "#fff", fWeigth: "bold" };
  };
  bStyles = getColors();
  return (
    <View
      style={[styles.bScore, { backgroundColor: bStyles.bColor }, stylesAdded]}
    >
      <Text
        style={[
          { color: bStyles.tColor, fontWeight: bStyles.fWeigth },
          textStyles,
        ]}
      >
        {score}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bScore: {
    height: 35,
    width: 35,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
