import { View, StyleSheet } from "react-native";
import PlayBtnStyle from "./PlayBtnStyle";

// ? Play mode Btn Icons
// const PauseBtn = require("@/assets/icons/playbar/pauseBtn.svg");
const RewindBtn = require("@/assets/icons/playbar/rewindBtn.svg");
const PlayBtn = require("@/assets/icons/playbar/playBtn.svg");
const FastForwardBtn = require("@/assets/icons/playbar/fast-forwardBtn.svg");
const StopBtn = require("@/assets/icons/playbar/stopBtn.svg");


// const StopBtn = require("@/assets/icons/playbar/play-button.svg");

export default function PlayBar() {
  return (
    <View style={styles.playBar}>
      {/* <PlayBtnStyle BtnSrc={PauseBtn} /> */}
      <View></View>
      <PlayBtnStyle btnSrc={RewindBtn} btnType={"Rewind"} />
      <PlayBtnStyle btnSrc={PlayBtn} btnType={"Play"} />
      <PlayBtnStyle btnSrc={FastForwardBtn} btnType={"Fast Forward"} />
      <PlayBtnStyle btnSrc={StopBtn} btnType={"Stop"} />
    </View>
  );
}

const styles = StyleSheet.create({
  playBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "green",
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
});
