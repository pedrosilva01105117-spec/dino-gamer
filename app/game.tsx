import Dino from "@/components/Dino";
import Movinbackground from "@/components/Movinbackground";
import Obstacle from "@/components/Obstacle";
import Score from "@/components/score";
import { useGame } from "@/hooks/gameHook";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function GameScreen() {
  const { jump } = useGame();
  const [obstacles, setObstacles] = useState([] as any);

  function spawnObstacles() {
    setObstacles((oldValue: any) => [...oldValue, Date.now().toString]);
  }

  function removeObstacle(id: any) {
    setObstacles((oldValue: any) =>
      oldValue.filter((obstacles: any) => obstacles !== id),
    );
  }

  useEffect(() => {
    const interval = setInterval(() => spawnObstacles(), 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Pressable onPress={jump} style={s.button}>
      <View style={s.container}>
        <Movinbackground />
        <Dino />
        <Score />
        {obstacles.map((obstacles: any) => (
          <Obstacle key={obstacles} onEnd={() => removeObstacle(obstacles)} />
        ))}
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },
  button: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
