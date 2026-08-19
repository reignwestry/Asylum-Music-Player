import { View, Text, Image, Pressable, StyleSheet } from "react-native";
const AddPlaylistBtn = require("@/assets/icons/playbar/playlist_addBtn.svg");
const PlaylistBtn = require("@/assets/icons/playbar/playlistBtn.svg");

/* ! Fix error type in SongProps in MetadataBar  */

type SongProps = {
  artist: string;
  track: string;
  album: string;
};
/*
    Rating up to 5 stars or number value
*/
export default function MetadataBar(SongProps: SongProps) {
  SongProps = {
    artist: "Micheal Jackson",
    track: "Bad",
    album: "Bad",
  };
  return (
    <View style={styles.metaDataBar}>
      <Pressable
        onPress={() => {
          console.log("Add Playlist button pressed!");
        }}
        style={styles.playlistBtnContainer}
      >
        <Image source={AddPlaylistBtn} style={styles.playlistIcon} />
      </Pressable>
      <View style={styles.songDataContainer}>
        <Text style={styles.artistTrack}>{SongProps.track}</Text>
        <Text style={styles.artistName}>
          {SongProps.artist} - {SongProps.album}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          console.log("View Playlist button pressed!");
        }}
        style={styles.playlistBtnContainer}
      >
        <Image source={PlaylistBtn} style={styles.playlistIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  playlistIcon: {
    width: "100%",
    height: "100%",
  },
  playlistBtnContainer: {
    display: "flex",
    alignItems: "center",
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
  songDataContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    justifyContent: "center",
  },
  artistAlbum: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  artistName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  artistTrack: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  metaDataBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "darkblue",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});
