import { Image, StyleSheet, Text, View } from "react-native";
import GenreBox from "./GenreBox";
import RatingBox from "./RatingBox";

type DataProps = {
	id: any;
	img?: string;
	title: string;
	artist: string;
	album: string;
	genre: string;
	rating: number;
};

export default function DataBlock({
	id,
	// img,
	title,
	artist,
	album,
	genre,
	rating,
}: DataProps) {
	return (
		<View style={styles.dataBlock}>
			<View style={styles.dataImgContainer}>
				<Image
					source={require("@/assets/dumby/micheal-jackson-bad.png")}
					resizeMode="contain"
					style={styles.dataImg}
				/>
			</View>
			<View style={styles.metaDataContainer}>
				<RatingBox rating={rating} />
				<View style={styles.titleBox}>
					<Text style={styles.titleText}> {title}</Text>
				</View>
				<View style={styles.artistBox}>
					<Text style={styles.artistText}>{artist}</Text>
				</View>
				<View style={styles.albumBox}>
					<Text style={styles.albumText}>{album}</Text>
				</View>
				<GenreBox genre={genre} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 14,
		fontWeight: "bold",
		marginLeft: "2%",
		color: "white",
	},
	titleBox: {
		width: "100%",
		height: "20%",
		// backgroundColor: "darkred",
	},
	artistText: {
		fontSize: 12,
		fontWeight: 500,
		marginLeft: "2%",
		color: "white",
	},
	artistBox: {
		width: "100%",
		height: "20%",
		// backgroundColor: "teal",
	},
	albumText: {
		fontSize: 12,
		marginLeft: "2%",
		color: "white",
	},
	albumBox: {
		// backgroundColor: "darkgrey",
		width: "100%",
		height: "20%",
		color: "white",
	},
	metaDataContainer: {
		width: "83%",
		height: "100%",
		// backgroundColor: "orange",
		flexDirection: "column",
	},
	dataImg: {
		width: "97%",
		height: "97%",
	},
	dataImgContainer: {
		// backgroundColor: "red",
		width: "16%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		margin: "0.5%",
	},
	dataBlock: {
		backgroundColor: "darkgreen",
		height: "40%",
		width: "100%",
		flexDirection: "row",
		marginTop: "1%",
	},
});
