import { ScrollView, StyleSheet } from "react-native";
import DataBlock from "./DataBlock";

import * as DataImg from "@/assets/dumby/micheal-jackson-bad.png";

const DATA = [
  {
    id: "1",
    img: { DataImg },
    title: "First Item",
    artist: "Micheal Jackson",
    album: "Bad",
    genre: "Pop",
    rating: 3,
  },
  {
    id: "2",
    img: { DataImg },
    title: "Second Item",
    artist: "Micheal Jackson",
    album: "Bad",
    genre: "Pop",
    rating: 2,
  },
  {
    id: "3",
    img: { DataImg },
    title: "Third Item",
    artist: "Micheal Jackson",
    album: "Bad",
    genre: "Pop",
    rating: 5,
  },
];

/* TODO 
    Grab all metadata
    Display all track data
    ADD to playlists
    Edit tracks
    remove tracks
    save all metadata to each track upon update

*/

export default function LibraryMiddleCol() {
  return (
    <ScrollView style={styles.middleCol}>
      {DATA.map((track) => (
        <DataBlock
          id={track.id}
          title={track.title}
          artist={track.artist}
          album={track.album}
          genre={track.genre}
          rating={track.rating}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  middleCol: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});
