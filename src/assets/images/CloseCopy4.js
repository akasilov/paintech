import * as React from "react";

function SvgCloseCopy4(props) {
  return (
    <svg width={50} height={50} {...props}>
      <path
        d="M1 1l14.142 14.142M15 1L1 15"
        fill="none"
        fillRule="evenodd"
        stroke="#FFF"
        strokeLinecap="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgCloseCopy4;
