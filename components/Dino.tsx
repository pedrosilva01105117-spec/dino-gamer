import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import { Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function Dino() {
  const { jumping, stopJump } = useGame();
  const dinoHeight = useSharedValue(0);

  function Handlejump() {
    dinoHeight.value = withSequence(
      withTiming(-100, {
        duration: 500,
        easing: Easing.linear,
      }),
      withTiming(
        0,
        {
          duration: 500,
          easing: Easing.linear,
        },
        () => stopJump(),
      ),
    );
  }

  useEffect(() => {
    if (jumping) {
      Handlejump();
    }
  }, [jumping]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: dinoHeight.value,
      },
    ],
  }));

  return (
    <Animated.View style={[s.dino, animatedStyle]}>
      {jumping ? (
        <Image
          source={require("@/assets/images/dino3.gif")}
          resizeMode="contain"
          style={s.image2}
        />
      ) : (
        <Image
          source={require("@/assets/images/dino11.gif")}
          resizeMode="contain"
          style={s.image}
        />
      )}
    </Animated.View>
  );
}

const s = StyleSheet.create({
  dino: {
    width: 100,
    height: 200,
    position: "absolute",
    zIndex: 10,
    top: "50%",
  },
  image: {
    width: 190,
    height: 190,
  },
  image2: {
    width: 170,
    height: 170,
  },
});
