import {View, Text, ImageBackground,  StyleSheet} from 'react-native';
import {Image} from 'expo-image'
import RatingBar from './RatingBar';

// # Images
const AlbumCover = require('@/assets/dumby/micheal-jackson-bad.png');

export default function AlbumCoverContainer() {
  return (
    <View style={styles.albumCoverContainer}>
      <ImageBackground source={AlbumCover} style={styles.albumCover}>
    
        <RatingBar />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  albumCover: {
    width: "70%",
    height: "100%",
    resizeMode: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,

  },
  albumCoverContainer: {
    display: "flex",
    backgroundColor: "red",
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
});
