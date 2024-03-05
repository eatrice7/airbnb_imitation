import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconWeobo = memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-label="前往微博"
      role="img"
      focusable="false"
      style={styleStrToObject("display: block; height: 18px; width: 18px; fill: currentcolor;")}
    >
      <path d="M32 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4z"></path>
      <path
        fill="#fff"
        d="M15.28 7.8c.63.64.73 1.72.37 3.01l-.07.25c-.13.4.11.44.34.4l.11-.02.1-.03.39-.15c2.71-1.08 5.06-1.1 5.93.15.48.69.44 1.65 0 2.77-.15.36-.06.5.15.6l.07.03.4.13c1.55.53 3.2 1.72 3.2 3.75 0 3.49-5.03 7.89-12.6 7.89C7.9 26.58 2 23.78 2 19.18c0-2.4 1.52-5.2 4.14-7.81 3.51-3.5 7.6-5.1 9.14-3.57zm-2.68 6.18c-4.6.45-8.1 3.27-7.8 6.3.3 3.02 4.28 5.1 8.89 4.65 4.6-.46 8.1-3.28 7.8-6.3-.3-3.02-4.28-5.11-8.89-4.65zm1.55 2.32c2.26.6 3.42 2.73 2.5 4.8a4.98 4.98 0 0 1-5.94 2.53c-2.21-.72-3.16-2.9-2.18-4.87a5.01 5.01 0 0 1 5.62-2.46zm-4.27 3.88c-.45.7-.23 1.52.47 1.85.72.32 1.68.01 2.12-.7.44-.72.2-1.53-.51-1.84-.72-.3-1.64 0-2.08.7zm3.06-1.13c-.15.27-.07.58.2.7.28.1.64-.02.8-.3.16-.28.06-.59-.22-.69-.27-.1-.61.02-.78.3zm8.5-14.94a7.35 7.35 0 0 1 6.26 2.12l.22.24a7.35 7.35 0 0 1 1.7 6.6l-.08.34-.08.26-.04.1a1.06 1.06 0 0 1-2.03-.51l.02-.13.03-.12.07-.23.05-.24a5.23 5.23 0 0 0-6.2-6.26 1.06 1.06 0 0 1-.68-2l.12-.05.11-.03.27-.05zm.26 3.79a3.58 3.58 0 0 1 4.17 4.61.92.92 0 0 1-1.8-.32l.02-.13.07-.27.03-.16a1.75 1.75 0 0 0-1.79-1.98l-.17.02-.26.04h-.11a.92.92 0 1 1-.16-1.81z"
      ></path>
    </svg>
  );
});

export default IconWeobo;