import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function score() {
  const { score, setScore } = useGame();

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((oldState: any) => oldState + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={s.container}>
      <Text style={s.text}>{score}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    left: "95%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
