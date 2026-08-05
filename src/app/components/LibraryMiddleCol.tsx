import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function LibraryMiddleCol(){
    return(
        <View style={styles.middleCol}>
            <Text>Middle Col</Text>
            <View style={styles.searchBar}>
                <Text style={styles.searchBarTitle}>Search:</Text>
                <TextInput style={styles.searchBarInput} placeholder={'Savage'}/>
            </View>
            <View style={styles.dataBlock}>
                <View style=''>

                </View>
                <View>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBarInput:{
        color: 'green',
        backgroundColor: 'darkgrey',
        fontSize: 14,
        fontWeight: 500,
        padding: '1%',
        width: '85%',
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid'
    },
    searchBarTitle:{
        color: 'yellow',
        fontSize: 14,
        fontWeight: 'bold'
    },
    searchBar:{
        backgroundColor: 'black',
        height: '3%',
        display: 'flex',
        flexDirection: 'row'

    },
    dataBlock:{
        backgroundColor: 'darkgrey',
        height: '15%',
        flexDirection: 'row'
    },
  middleCol: {
    display: 'flex',
    flexDirection: 'column',
    width: "95%",
    height: "100%",
    backgroundColor: "teal",
  },
});