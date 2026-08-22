import { Image, StyleSheet, View } from "react-native";

type RatingProp = {
  rating: number;
};
export default function RatingBox({ rating = 1 }: RatingProp) {
  return (
    <View style={styles.ratingBox}>
      {Array.from({ length: rating }, (_, index) => (
        <Image
          source={require("@/assets/icons/rating/ratingOne.svg")}
          style={styles.ratingIcon}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ratingIcon: {
    height: "100%",
    width: "8%",
    color: "white",
  },
  ratingBox: {
    width: "100%",
    height: "20%",

    marginRight: "2%",
    display: "flex",
    flexDirection: "row-reverse",
    color: "black",
  },
});
