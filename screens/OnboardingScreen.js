import React from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Button,
  View,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Ionicons } from "@expo/vector-icons";
import Svg, {
  G,
  Path,
  Polygon,
  Rect,
  Ellipse,
  Line,
  Circle,
} from "react-native-svg";
import * as Colors from "../Constants/Colors";
import { useFonts } from "expo-font";
import * as Blob from "../Constants/Blob";
const backgroundColor = (isLight) => (isLight ? "blue" : "lightblue");
const color = (isLight) => backgroundColor(!isLight);
const { width, height } = Dimensions.get("screen");

const OnboardingScreen = ({ navigation }) => {
  const blobs = [
    { Path: Blob.BLOB_1_PATH, transform: Blob.BLOB_1_TRANSFORM },
    { Path: Blob.BLOB_2_PATH, transform: Blob.BLOB_2_TRANSFORM },
    { Path: Blob.BLOB_3_PATH, transform: Blob.BLOB_3_TRANSFORM },
  ];

  let [fontsLoaded] = useFonts({
    LemonMilkBoldItalic: require("../assets/fonts/LEMONMILK-BoldItalic.otf"),
    LemonMilk: require("../assets/fonts/LEMONMILK-Regular.otf"),
  });

  const blob1 = (
    <Svg
      id="visual"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 600 900"
    >
      <G transform={blobs[2].transform}>
        <Path fill={Colors.PRIMARY} d={blobs[2].Path} />
      </G>
      <Polygon
        stroke={Colors.BLACK}
        stroke-miterlimit="10"
        points="398.861,397 205.052,397 219.694,249 384.219,249 "
        fill={Colors.BLACK}
      />
      <Rect
        x="302"
        y="373.299"
        stroke={Colors.BLACK}
        stroke-miterlimit="10"
        fill={Colors.BLACK}
        width="0"
        height="243.194"
      />
      <Rect
        x="291"
        y="397"
        stroke={Colors.BLACK}
        stroke-miterlimit="10"
        fill={Colors.BLACK}
        width="22"
        height="243"
      />
      <Polygon
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        points="390.215,650 213.699,650 227.035,631 376.879,631 "
      />
    </Svg>
  );

  const blob2 = (
    <Svg
      version="1.1"
      id="visual"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 600 900"
    >
      <Rect x="2" y="2.667" width={width} height={height} />
      <G transform={blobs[1].transform}>
        <Path fill={Colors.PRIMARY} d={blobs[1].Path} />
      </G>
      <Line
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        x1="302"
        y1="616.493"
        x2="302"
        y2="616.493"
      />
      <Line
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        x1="302"
        y1="373.299"
        x2="302"
        y2="373.299"
      />
      <Rect
        x="338"
        y="288"
        stroke={Colors.BLACK}
        stroke-miterlimit="10"
        fill={Colors.BLACK}
        width="16"
        height="398"
      />
      <Ellipse
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        cx="346.349"
        cy="678.188"
        rx="96.376"
        ry="17.812"
      />
      <Polygon
        fill={Colors.BLACK}
        stroke={Colors.BLACK}
        stroke-miterlimit="10"
        points="420.103,326.851 411.461,338.837 176.417,194.631 185.059,182.646 "
      />
      <G>
        <Path
          fill={Colors.BLACK}
          d="M162.921,262.748c0,0,52.929,20.86,56.164,12.132c0.282-4.211,3.161-18.599,2.337-23.819
		c-0.822-5.219-11.771-20.247-18.417-27.028c-0.807-3.042,1.3-15.538,1.3-15.538l-8.511-4.011L162.921,262.748z"
        />
      </G>
      <G>
        <Path
          fill={Colors.BLACK}
          d="M162.991,262.824c0,0-51.257-26.191-44.452-34.272c4.02-2.941,16.651-14.421,22.312-17.185
		c5.661-2.765,26.904-4.286,37.473-3.693c3.489-1.366,14.687-11.042,14.687-11.042l8.894,3.787L162.991,262.824z"
        />
      </G>
    </Svg>
  );

  const blob3 = (
    <Svg
      id="visual"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 600 900"
    >
      <G transform={blobs[0].transform}>
        <Path fill={Colors.PRIMARY} d={blobs[0].Path} />
      </G>
      <Path
        d="M300.538,746.16c0,0,80.533,1.717,78.451-13.147c-2.084-14.863-78.451-80.303-78.451-80.303l-76.602,81.606
        C223.936,734.316,223.194,748.748,300.538,746.16z"
        color={Colors.BLACK}
        fill={Colors.BLACK}
      />
      <Rect
        x="292.619"
        y="322.885"
        width="18.123"
        height="372.518"
        color={Colors.BLACK}
        fill={Colors.BLACK}
      />
      <Circle
        cx="301.83"
        cy="283.617"
        r="73.45"
        color={Colors.BLACK}
        fill={Colors.BLACK}
      />
      <Path
        d="M448.749,273.459c-1.579-80.504-67.568-145.281-148.734-145.281c-82.159,0-148.763,66.368-148.763,148.235"
        color={Colors.BLACK}
        fill={Colors.BLACK}
      />
    </Svg>
  );

  let title1 = <Text style={styles.headerText}>WELCOME!</Text>;
  let descr1 = (
    <Text style={styles.descriptionText}>
      Welcome to Modulamp{"\n"} We make custom lamps
    </Text>
  );

  let title2 = <Text style={styles.headerText}>CREATE!</Text>;
  let descr2 = (
    <Text style={styles.descriptionText}>
      Create your own personalized lamp
    </Text>
  );

  let title3 = <Text style={styles.headerText}>FUN!</Text>;
  let descr3 = (
    <Text style={styles.descriptionText}>
      Share or purchase your masterpiece
    </Text>
  );

  const Done = () => (
    <View style={styles.button}>
      <Ionicons
        name="md-checkmark-sharp"
        size={34}
        color={Colors.BLACK}
        onPress={() => navigation.navigate("Home")}
        buttonStyle={{}}
      />
    </View>
  );

  const getPageIndex = (pageIndex) => {
    console.log("index is: ", pageIndex);
  };

  return (
    fontsLoaded && (
      <SafeAreaView style={styles.container}>
        <Onboarding
          pageIndexCallback={getPageIndex}
          backgroundColor={Colors.WHITE}
          bottomBarHighlight={false}
          showNext={false}
          showSkip={false}
          DoneButtonComponent={Done}
          pages={[
            {
              image: blob1,
              backgroundColor: Colors.WHITE,
              title: title1,
              subtitle: descr1,
            },
            {
              image: blob2,
              backgroundColor: Colors.WHITE,
              title: title2,
              subtitle: descr2,
            },
            {
              image: blob3,
              backgroundColor: Colors.WHITE,
              title: title3,
              subtitle: descr3,
            },
          ]}
        />
      </SafeAreaView>
    )
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
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
