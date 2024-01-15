import * as React from 'react';
const SvgEye = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      //   fill="#fff"
      strokeOpacity={0.4}
      //   fillOpacity={0.4}
      d="M1 12s4-8 11-8 11 8 11 8M1 12s4 8 11 8 11-8 11-8"
    />
    <circle
      cx={12}
      cy={12}
      r={3}
      stroke="#fff"
      strokeOpacity={0.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default SvgEye;
