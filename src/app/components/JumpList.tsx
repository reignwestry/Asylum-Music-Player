import { View, Text, Pressable, StyleSheet } from "react-native";

export default function JumpList() {
  return (
    <View style={styles.jumpListCol}>
      {/* # A-Z Quick Jump list View */}
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>A</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>B</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>C</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>D</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>E</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>F</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>G</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>H</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>I</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>J</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>K</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>L</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>M</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>N</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>O</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>P</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>Q</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>R</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>S</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>T</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>U</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>V</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>W</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>X</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>Y</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>Z</Text>
      </Pressable>
      <Pressable style={styles.jumpBtn}>
        <Text style={styles.jumpListText}>#</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  jumpListCol: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "5%",
    backgroundColor: "saddlebrown",
    justifyContent: "space-around",
  },
  jumpBtn: {
    width: "100%",
    height: "2%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    marginTop: "3%",
  },
  jumpListText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "lime",
    textAlign: "center",
  },
});
