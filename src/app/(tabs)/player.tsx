import { Text, View, Pressable, Image, StyleSheet } from "react-native";

// ? IMPORT COMPONENTS
import Header from "../components/Header";
import Body from "../components/Body";
import BtmNav from "../components/BtmNav";

export default function Player() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <BtmNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
