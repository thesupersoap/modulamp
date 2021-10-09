import React from "react";
import { StyleSheet, Dimensions, View, StatusBar, Alert } from "react-native";
import LottieView from "lottie-react-native";

import Animated, {
  useAnimatedProps,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  runOnUI,
  runOnJS,
} from "react-native-reanimated";
import Page from "../components/Onboarding/Page";
const { width, height } = Dimensions.get("screen");
import * as Colors from "../Constants/Colors";
const TITLES = ["Welcome!", "Create!", "Own!"];
const SUBTEXT = [
  "Welcome to ModuLamp",
  "We make custom lamps",
  "Purchase your creation",
];

const OnboardingScreen = ({ navigation }) => {
  const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
  const offset = useSharedValue(0);
  const finished = useSharedValue(false);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    offset.value = event.contentOffset.x;
    if (
      Math.min(
        offset.value / width / 2 < 0 ? 0 : offset.value / width / 2,
        1
      ) === 1
    ) {
      finished.value = true;
      console.log(finished.value);
    } else {
      finished.value = false;
      console.log(finished.value);
    }
  });

  const animatedLottieProps = useAnimatedProps(() => {
    //keeps progress range between 0 and 1 for iOS where user can
    //scroll beyond normal bounds
    const progress = Math.min(
      offset.value / width / 2 < 0 ? 0 : offset.value / width / 2,
      1
    );
    console.log(`progress: ${progress}`);

    return {
      progress: progress,
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <AnimatedLottieView
        style={styles.blob}
        source={require("../assets/lottie/blob_morph.json")}
        animatedProps={animatedLottieProps}
        loop={false}
      />
      <Animated.ScrollView
        scrollEventThrottle={16} //60fps
        style={styles.scrollViewContainer}
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
      >
        {TITLES.map((title, index) => {
          return (
            <Page
              key={index.toString()}
              title={title}
              translateX={offset}
              index={index}
              description={SUBTEXT[index]}
            />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  blob: {
    position: "absolute",
    zIndex: -1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    width: width,
    height: height,
  },
  scrollViewContainer: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: "LemonMilk",
    zIndex: 1,
    position: "absolute",
    bottom: "20%",
    width: width * 0.8,
    textAlign: "center",
  },
  headerText: {
    fontSize: 36,
    fontFamily: "LemonMilkBoldItalic",
    position: "absolute",
    top: "13%",
    zIndex: 1,
  },
  lamp: {
    position: "absolute",
    right: "50%",
  },
  button: {
    marginRight: 50,
    marginBottom: 5,
  },
});
