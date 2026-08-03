import { View, Text, ImageBackground, StyleSheet } from "react-native";

const dumbyTrackBar = require("@/assets/dumby/song-wave.png");

export default function TrackBar() {
  return (
    <View style={styles.trackBarContainer}>
      <ImageBackground source={dumbyTrackBar} style={styles.trackBar}>
        <Text style={styles.trackBarText}>TrackBar</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    trackBarText:{
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
    },
    trackBar: { 
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
  trackBarContainer: {
    height: "10%",
    width: "100%",
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});
