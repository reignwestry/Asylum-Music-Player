import { View, Text, Pressable, StyleSheet } from "react-native";

export default function SideNav() {
  return (
    <View style={styles.sideNav}>
      <View style={styles.navList}>
        <Pressable
          style={styles.listBtnStyle}
          onPress={() => {
            console.log("Search Btn pressed");
          }}
        >
          <Text style={styles.listItemText}>Search </Text>
        </Pressable>
        <Pressable
          style={styles.listBtnStyle}
          onPress={() => {
            console.log("Song Btn pressed");
          }}
        >
          <Text style={styles.listItemText}>Songs (134243)</Text>
        </Pressable>
        <Pressable
          style={styles.listBtnStyle}
          onPress={() => {
            console.log("Albums Btn pressed");
          }}
        >
          <Text style={styles.listItemText}>Albums (243)</Text>
        </Pressable>
        <Pressable
          style={styles.listBtnStyle}
          onPress={() => {
            console.log("Artists Btn pressed");
          }}
        >
          <Text style={styles.listItemText}>Artists (43)</Text>
        </Pressable>
        <Pressable
          style={styles.listBtnStyle}
          onPress={() => {
            console.log("Genre Btn pressed");
          }}
        >
          <Text style={styles.listItemText}>Genre (43)</Text>
        </Pressable>
        <Pressable
          style={styles.listBtnStyle}
          onPress={() => {
            console.log("Radios Btn pressed");
          }}
        >
          <Text style={styles.listItemText}>Radios (3)</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navList: {
    width: "100%",
  },
  sideNav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "brown",
    width: "20%",
  },
  listBtnStyle: {
    width: "100%",
    height: "20%",
    marginTop: "5%",
    backgroundColor: "blue",
    justifyContent: "center",
  },
  listItemText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
