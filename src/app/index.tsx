import { Text, View, Pressable, StyleSheet } from "react-native";

function Header(){
  return(
    <View style={styles.header}>
        <Text>Asylum</Text>
    </View>
  );
}

function Body(){
  return(
    <View style={styles.body}>

    </View>
  );
}

function BtmNav() {
  return (
    <View style={styles.btmNav}>
      {/* <Text>btmNav</Text> */}
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn1 clicked")}>
        <Text>Library</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn2 clicked")}>
        <Text>Playlists</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn3 clicked")}>
        <Text>Player</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn4 clicked")}>
        <Text>EQ</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => alert("btn5 clicked")}>
        <Text>Settings</Text>
      </Pressable>
    </View>
  );
}
export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <BtmNav />
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    height: "90%",
    backgroundColor: "black",
  },
  header:{
    backgroundColor: "lightgray",
    width: "100%",
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  btmNav:{
    height: "10%",
    backgroundColor: "blue",
    flexDirection: "row",
  },
  btnContainer: {
    backgroundColor: "gray",
    alignItems: "center",
    width: "20%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
