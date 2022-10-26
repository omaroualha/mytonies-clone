import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGShape = (props) => (
  <Svg
    viewBox="100 150 150 100"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <Path
      style={{
        paintOrder: "stroke",
        fill: "rgb(232, 241, 248)",
        stroke: "rgba(0, 0, 0, 0)",
      }}
      d="M 398.92 70.003 L 400.326 186.295 C 335.132 188.107 283.595 180.188 245.577 177.148 C 220.474 175.141 195.45 149.167 182.844 69.594"
    />
  </Svg>
);
export default SVGShape;
