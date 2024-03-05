import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconArrowLeft = memo((props) => {
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
      <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
    </svg>
  );
});

export default IconArrowLeft;
