import { View, Text, Image, Pressable, StyleSheet } from "react-native";

type BtnProps = {
  btnSrc: any;
  btnType: any
};

export default function PlayBtnStyle(BtnProps: BtnProps) {
  return (
    <Pressable
      style={styles.btnStyle}
      onPress={() => {
        console.log(`${BtnProps.btnType} button pressed`);
      }}
    >
      <Image source={BtnProps.btnSrc} style={styles.btnImg} />
      {/* <Text>Play</Text> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    color: "black",
  },
  playBtnStyle: {
    backgroundColor: "black",
  },
  btnStyle: {
    width: "15%",
    height: "100%",
    // backgroundColor: "blue",
  },
});
