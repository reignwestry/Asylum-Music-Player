import { StyleSheet, Text, View } from "react-native";

type GenreProps = {
  genre: string;
};
export default function GenreBox({ genre }: GenreProps) {
  return (
    <View style={styles.genreBox}>
      <Text style={styles.genreText}>{genre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  genreText: {
    color: "white",
    fontSize: 12,
    marginLeft: "2%",
  },
  genreBox: {
    // backgroundColor: "purple",
    width: "100%",
    height: "20%",
  },
});
