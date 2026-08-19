import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Asylum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightgray",
    width: "100%",
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
