import React from "react";
import Svg, { Rect, Ellipse, Polygon, G, Path } from "react-native-svg";
import * as Colors from "../../Constants/Colors";
export default function Lamp2(props) {
  return (
    <Svg
      x="0px"
      y="0px"
      width={props.width / 1.44}
      height={props.height / 1.44}
      viewBox="0 0 325.308 514.523"
    >
      <Rect
        x="220.083"
        y="106.023"
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        width="16"
        height="398"
      />
      <Ellipse
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        cx="228.432"
        cy="496.211"
        rx="96.376"
        ry="17.812"
      />
      <Polygon
        stroke={Colors.BLACK}
        fill={Colors.BLACK}
        stroke-miterlimit="10"
        points="302.186,144.874 293.544,156.86 58.5,12.654 67.142,0.669 "
      />
      <G>
        <Path
          d="M45.004,80.771c0,0,52.929,20.86,56.164,12.132c0.282-4.211,3.161-18.599,2.337-23.819
                c-0.822-5.219-11.771-20.247-18.417-27.028c-0.807-3.042,1.3-15.538,1.3-15.538l-8.511-4.011L45.004,80.771z"
          fill={Colors.BLACK}
        />
      </G>
      <G>
        <Path
          d="M45.074,80.847c0,0-51.257-26.191-44.452-34.272c4.02-2.941,16.651-14.421,22.312-17.185
                c5.661-2.765,26.904-4.286,37.473-3.693c3.489-1.366,14.687-11.042,14.687-11.042l8.894,3.787L45.074,80.847z"
          fill={Colors.BLACK}
        />
      </G>
    </Svg>
  );
}
