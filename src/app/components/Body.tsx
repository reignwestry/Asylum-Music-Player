import { View, Text, StyleSheet } from "react-native";

// # Images
// const AlbumCover = require("./assets/images/album-cover.jpg");

function PlayBar() {
  return (
    <View style={styles.playBar}>
      <Text>PlayBar</Text>
    </View>
  );
}

function AlbumCoverContainer() {
  return (
    <View style={styles.albumCoverContainer}>
      {/* <Text>Album Cover</Text> */}
      {/* <Image source={AlbumCover} style={styles.albumCover} /> */}
    </View>
  );
}

export default function Body() {
  return (
    <View style={styles.body}>
      <AlbumCoverContainer />
      <PlayBar />
    </View>
  );
}

const styles = StyleSheet.create({
  playBar: {
    backgroundColor: "green",
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  albumCover: {
    width: "100%",
    height: "100%",
    // backgroundImage: "url('../../assets/images/album-cover.jpg')",
    backgroundColor: "gold",
  },
  albumCoverImage: {
    width: "100%",
    height: "100%",
  },
  albumCoverContainer: {
    backgroundColor: "red",
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    height: "90%",
    backgroundColor: "black",
  },
});
