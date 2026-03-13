import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AddIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M6 12H18"
      stroke={props.color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={props.color}
    />
    <Path
      d="M12 18V6"
      stroke={props.color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
            fill={props.color}

    />
  </Svg>
);
export default AddIcon;
