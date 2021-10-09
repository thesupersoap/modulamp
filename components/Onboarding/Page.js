import React from "react";
import PropTypes, { number, object, string } from "prop-types";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as Colors from "../../Constants/Colors";
import { useFonts } from "expo-font";
import Svg, { Polygon, Rect } from "react-native-svg";
import Lamp1 from "./Lamp1";
import Lamp2 from "./Lamp2";
import Lamp3 from "./Lamp3";
const { width, height } = Dimensions.get("window");

const Page = (props) => {
  let [fontsLoaded] = useFonts({
    LemonMilkBoldItalic: require("../../assets/fonts/LEMONMILK-BoldItalic.otf"),
    LemonMilk: require("../../assets/fonts/LEMONMILK-Regular.otf"),
  });

  const LAMPS = [
    <Lamp1 width={width} height={height} />,
    <Lamp2 width={width} height={height} />,
    <Lamp3 width={width} height={height} />,
  ];

  const inputRange = [
    (props.index - 1) * width,
    props.index * width,
    (props.index + 1) * width,
  ];

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      props.translateX.value,
      inputRange,
      [(-1 * height) / 2, 0, (-1 * height) / 2],
      Extrapolate.CLAMP
    );
    // console.log(props.translateX.value);
    const translateX = interpolate(
      props.translateX.value,
      inputRange,
      [-width, 0, width],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          translateY: translateY,
        },
        { translateX: translateX },
      ],
    };
  });

  return (
    fontsLoaded && (
      <View style={styles.container}>
        <Animated.View style={[styles.titleContainer, rTextStyle]}>
          <Text style={styles.titleText}>{props.title}</Text>
        </Animated.View>

        <View style={styles.lampContainer}>{LAMPS[props.index]}</View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{props.description}</Text>
        </View>
        {/* {props.index === 2 && <Text>Done!</Text>} */}
      </View>
    )
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: Colors.WHITE,
  },
  descriptionContainer: {
    position: "absolute",
    bottom: "10%",
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: "LemonMilk",
    color: Colors.BLACK,
  },
  titleContainer: {
    position: "absolute",
    top: "10%",
  },
  lampContainer: {
    position: "absolute",
  },
  titleText: {
    fontSize: 50,
    color: Colors.BLACK,
    textTransform: "uppercase",
    fontFamily: "LemonMilkBoldItalic",
  },
});

Page.propTypes = {
  title: string.isRequired,
  index: number.isRequired,
  translateX: object.isRequired,
  description: string,
};
