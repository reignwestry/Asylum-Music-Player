import {View, Text, Image, StyleSheet} from 'react-native';

const DataImg = require('@/assets/dumby/micheal-jackson-bad.png');

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     img: {DataImg},
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

type DataProps = {
    id: any,
    img: string,
    title: string,
    artist: string,
    album: string,
    DataImg: string,

}

function DataBlock({ id, img, title, artist, album, DataImg}: DataProps) {
    return (
      <View style={styles.dataBlock}>
        <View style={styles.dataImgContainer}>
          <Image
            source={require("@/assets/dumby/micheal-jackson-bad.png")}
            style={styles.dataImg}
          />
        </View>
        <View style={styles.metaDataBlock}></View>
      </View>
    );
};

export default function LibraryMiddleCol(){
    return(
        <View style={styles.middleCol}>
            <Text>Middle Col</Text>
        <DataBlock />

        </View>
    );
}

const styles = StyleSheet.create({
    dataImg: {
        width: '100%',
        height: '100%',
    },
    metaDataBlock:{

    },
    dataImgContainer:{
        backgroundColor: 'red',
        width: '10%',
        height: '100%'
    },
  dataBlock: {
    backgroundColor: "darkgrey",
    height: "15%",
    flexDirection: "row",
  },


  middleCol: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "100%",
    backgroundColor: "teal",
  },
});