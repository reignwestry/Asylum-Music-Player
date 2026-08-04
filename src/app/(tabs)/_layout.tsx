import { FontAwesome } from "@react-native-vector-icons/fontawesome";
import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";

// ? ICONS
// const EqualizerIcon = require("@/assets/icons/equalizer   ");

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="music" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="player"
        options={{
          title: "Player",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="play" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="equalizer"
        options={{
          title: "EQ",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="play" color={color} />
            // <Image source={EqualizerIcon} style={{ width: 28, height: 28 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="ringtoneMaker"
        options={{
          title: "RingtoneMaker",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cut" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 28,
  },
});
