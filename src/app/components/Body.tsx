import { View, Text, StyleSheet } from "react-native";
import PlayBar from "./PlayBar";
import MetadataBar from "./MetadataBar";
import TrackBar from "./TrackBar";

import AlbumCover from "./AlbumCoverContainer";

export default function Body() {
  return (
    <View style={styles.body}>
      <AlbumCover />
      <MetadataBar />
      <PlayBar />
      <TrackBar />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "90%",
    backgroundColor: "black",
  },
});
