import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconArrowRight = memo((props) => {
  const { height = 12, width = 12 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={styleStrToObject(
        `display: block; fill: none; height: ${height}px; width: ${width}px; stroke: currentcolor; stroke-width: 4; overflow: visible;`
      )}
    >
      <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
    </svg>
  );
});

export default IconArrowRight;
