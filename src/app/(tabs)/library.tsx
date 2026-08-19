import { View, Text, Pressable, StyleSheet } from "react-native";
import SideNav from '../components/LibrarySideNav';
import JumpList from '../components/JumpList';
import LibraryMiddleCol from '../components/LibraryMiddleCol';

export default function Library() {
  return (
    <View style={styles.libraryContainer}>
        <SideNav />
      <View style={styles.rightCol}>
        <JumpList />
        <LibraryMiddleCol />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  middleCol: {
    width: "90%",
    height: "100%",
    backgroundColor: "teal",
  },
  rightCol: {
    backgroundColor: "green",
    width: "80%",
    display: "flex",
    flexDirection: "row-reverse",
  },

  libraryContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
});
