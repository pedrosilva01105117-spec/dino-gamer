import { useGame } from "@/hooks/gameHook";
import { Link } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Homescreen() {
  const { setScore } = useGame();

  return (
    <ImageBackground
      style={s.dino}
      source={require("@/assets/images/fundo4.jpg")}
      resizeMode="stretch"
    >
      <View style={s.container}>
        <Text style={s.title2}></Text>
        <Link href="/game" asChild replace>
          <TouchableOpacity style={s.button} onPress={() => setScore(0)}>
            <Image source={require("@/assets/images/oi.png")} />
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 100,
    right: 78,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 200,
  },
  dino: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontFamily: "cursive",
  },
  title2: {
    marginTop: 1,
    fontSize: 50,
    fontFamily: "cursive",
  },
});
