import React from "react";
import Svg, { Polygon, Rect } from "react-native-svg";
import * as Colors from "../../Constants/Colors";
const Lamp = (props) => {
  return (
    <Svg
      x="0px"
      y="0px"
      width={props.width / 2}
      height={props.height / 2}
      viewBox="0 0 180.413 372"
    >
      <Polygon
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        points="179.861,137.5 0.552,137.5 14.098,0.5 166.314,0.5 "
      />
      <Rect
        x="90.052"
        y="116"
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        width="0"
        height="225"
      />
      <Rect
        x="80.052"
        y="137.5"
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        width="20"
        height="225"
      />
      <Polygon
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        points="171.861,371.5 8.552,371.5 20.89,353.5 159.523,353.5 "
      />
    </Svg>
  );
};

export default Lamp;
