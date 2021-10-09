import React from "react";
import Svg, { Path, Rect, Circle } from "react-native-svg";
import * as Colors from "../../Constants/Colors";
export default function Lamp3(props) {
  return (
    <Svg
      x="0px"
      y="0px"
      width={props.width / 1.8}
      height={props.height / 1.8}
      viewBox="0 0 300.469 624.467"
    >
      <Path
        d="M150.777,624.152c0,0,81.337,1.734,79.235-13.277c-2.103-15.013-79.235-81.105-79.235-81.105L73.411,612.19
	C73.411,612.19,72.663,626.768,150.777,624.152z"
        fill={Colors.BLACK}
      />
      <Rect
        x="142.427"
        y="230.238"
        width="15"
        height="309"
        fill={Colors.BLACK}
      />
      <Circle cx="152.084" cy="156.992" r="74.189" fill={Colors.BLACK} />
      <Path
        d="M300.469,146.731C298.875,65.423,232.227,0,150.25,0C67.269,0,0,67.03,0,149.714"
        fill={Colors.BLACK}
      />
    </Svg>
  );
}
