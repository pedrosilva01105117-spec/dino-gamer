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

export default function End() {
  const { score } = useGame();

  return (
    <View style={s.container}>
      <ImageBackground
        style={s.image}
        resizeMode="cover"
        source={require("@/assets/images/fundo5.jpg")}
      />

      <View style={s.dino}>
        <Image
          style={s.image2}
          resizeMode="cover"
          source={require("@/assets/images/dino5.gif")}
        />
      </View>

      <View style={s.obstacle}>
        <Image
          style={s.image3}
          resizeMode="cover"
          source={require("@/assets/images/coringa.gif")}
        />
      </View>

      <View style={s.textContainer}>
        <Text style={s.text}>Fim de jogo!</Text>
        <Text style={s.text}>{score}</Text>

        <TouchableOpacity>
          <Link href="/" asChild>
            <Text style={s.button}>voltar</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  textContainer: {
    fontSize: 50,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    gap: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  obstacle: {
    position: "absolute",
    left: 750,
    top: 220,
  },
  dino: {
    width: "10%",
    height: "10%",
    position: "absolute",
    zIndex: 999,
    top: 210,
    left: 20,
  },
  text: {
    width: "auto",
    fontSize: 30,
    top: -145,
    fontWeight: "bold",
    color: "#ffffff",
  },
  button: {
    width: "auto",
    backgroundColor: "#000000",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    color: "#ffffff",
    top: -140,
    fontSize: 20,
  },
});
