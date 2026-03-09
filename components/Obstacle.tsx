import coringaBitmap from "@/assets/bitmaps/coringaObs.json";
import dino_movingBitmap from "@/assets/bitmaps/dinoMv.json";
import dinojumpigBitmap from "@/assets/bitmaps/dinopu.json";
import { useGame } from "@/hooks/gameHook";
import { router } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Obstacle({ onEnd }: any) {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);
  const { dinoHeight } = useGame();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));

  useEffect(() => {
    offset.value = withTiming(
      width,
      {
        duration: 3000,
        easing: Easing.linear,
      },
      onEnd,
    );
  }, []);

  useAnimatedReaction(
    () => {
      return offset.value;
    },
    (currentValue) => {
      const ObstaclePosition = width - Math.round(currentValue);
      const left = Math.max(20, width - ObstaclePosition);
      const right = Math.min(120, width - currentValue + 200);
      const bottom = Math.max(0, dinoHeight.value);
      const top = 120;

      if (left > right || bottom > top) {
        return;
      }

      for (let x = left; x < right; x++) {
        for (let y = bottom; y < top; y++) {
          const xDino = x - 8;
          const xObstacle = x - ObstaclePosition;
          const yDino = 100 - (y - dinoHeight.value);
          const yObstacle = 180 - y;

          const dinoBitmap =
            dinoHeight.value > 0 ? dinojumpigBitmap : dino_movingBitmap;

          if (
            xDino < 100 &&
            xDino > -1 &&
            yDino < 200 &&
            yDino > -1 &&
            xObstacle < 100 &&
            xObstacle > -1 &&
            yObstacle < 120 &&
            yObstacle > -1 &&
            dinoBitmap[xDino][yDino] &&
            coringaBitmap[xObstacle][yObstacle]
          ) {
            router.replace("/end");
          }
        }
      }
    },
  );

  return (
    <Animated.View style={[s.obstacle, animatedStyle]}>
      <Image
        source={require("@/assets/images/coringa.gif")}
        resizeMode="contain"
        style={s.image}
      />
    </Animated.View>
  );
}

const s = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  obstacle: {
    width: 100,
    height: 120,
    position: "absolute",
    bottom: "2%",
    right: 0,
  },
});
