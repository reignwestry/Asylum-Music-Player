import { Image, StyleSheet, View } from "react-native";

type RatingProp = {
	rating: number;
};
export default function RatingBox({ rating = 1 }: RatingProp) {
	return (
		<View style={styles.ratingBox}>
			{Array.from({ length: rating }, (_, index) => (
				// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
				<View style={styles.iconContainer}>
					<Image
						source={require("@/assets/icons/rating/ratingOne.svg")}
						resizeMode="contain"
						style={styles.ratingIcon}
					/>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	iconContainer: {
		height: "100%",
		width: "8%",
	},
	ratingIcon: {
		height: "100%",
		width: "100%",
		color: "white",
	},
	ratingBox: {
		// backgroundColor: 'blue',
		width: "100%",
		height: "20%",
		display: "flex",
		flexDirection: "row-reverse",
		color: "black",
	},
});
