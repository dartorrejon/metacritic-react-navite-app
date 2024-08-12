import { StyleSheet, View } from "react-native";

export function Screen({ children }) {
  return <View style={styles.screenDefault}>{children}</View>;
}
//comentario
const styles = StyleSheet.create({
  screenDefault: {
    backgroundColor: "#000",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
