import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function LibrarySearchBar(){
    return (
      <View style={styles.searchBar}>
        <Text style={styles.searchBarTitle}>Search:</Text>
        <TextInput style={styles.searchBarInput} placeholder={"Savage"} />
      </View>
    );
}


const styles = StyleSheet.create({
  searchBarInput: {
    color: "green",
    backgroundColor: "darkgrey",
    fontSize: 14,
    fontWeight: 500,
    padding: "1%",
    width: "85%",
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
  },
  searchBarTitle: {
    color: "yellow",
    fontSize: 14,
    fontWeight: "bold",
  },
  searchBar: {
    backgroundColor: "black",
    height: "3%",
    display: "flex",
    flexDirection: "row",
  },
});