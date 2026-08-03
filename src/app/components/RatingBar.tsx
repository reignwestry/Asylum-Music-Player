import { View, Text, Image, StyleSheet } from "react-native";

/*
    Rating up to 5 stars or number value
*/
let RatingScore; // Example rating score
const RatingOne = require("@/assets/icons/rating/ratingOne.svg");
const RatingTwo = require("@/assets/icons/rating/ratingTwo.svg");
const RatingThree = require("@/assets/icons/rating/ratingThree.svg");
const RatingFour = require("@/assets/icons/rating/ratingFour.svg");
const RatingFive = require("@/assets/icons/rating/ratingFive.svg");

type RatingProps = {
  Score: any;
  RatingOne: any;
  RatingTwo: any;
  RatingThree: any;
  RatingFour: any;
  RatingFive: any;
};

export default function RatingBar(RatingProps: RatingProps) {
  return (
    <View style={styles.ratingBar}>
      <Image source={RatingOne} style={styles.ratingIcon} />
      <Image source={RatingTwo} style={styles.ratingIcon} />
      <Image source={RatingThree} style={styles.ratingIcon} />
      <Image source={RatingFour} style={styles.ratingIcon} />
      <Image source={RatingFive} style={styles.ratingIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  ratingIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  ratingBar: {
    color: "white",
    flexDirection: "row",
    height: "8%",
    width: "auto",
    display: "flex",
    backgroundColor: "black",
  },
});
