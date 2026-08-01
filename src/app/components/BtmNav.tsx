import { View, Text, StyleSheet, Pressable } from "react-native";

export default function BtmNav() {
  return (
    <View style={styles.btmNav}>
      {/* <Text>btmNav</Text> */}
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn1 clicked")}
      >
        <Text>Library</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn2 clicked")}
      >
        <Text>Playlists</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn3 clicked")}
      >
        <Text>Player</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn4 clicked")}
      >
        <Text>EQ</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn5 clicked")}
      >
        <Text>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btmNav: {
    height: "10%",
    backgroundColor: "blue",
    flexDirection: "row",
  },
  btnContainer: {
    backgroundColor: "gray",
    alignItems: "center",
    width: "20%",
    height: "100%",
  },
});