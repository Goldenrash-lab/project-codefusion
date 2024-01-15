import * as React from 'react';
const SvgNoEye = props => (
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
      strokeOpacity={0.4}
      d="m2 2 20 20M6.713 6.723C3.665 8.795 2 12 2 12s3.636 7 10 7c2.05 0 3.817-.727 5.271-1.712M11 5.058A8.595 8.595 0 0 1 12 5c6.364 0 10 7 10 7s-.692 1.332-2 2.834"
    />
    <path
      stroke="#fff"
      strokeOpacity={0.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 14.236a3 3 0 0 1-4.13-4.348"
    />
  </svg>
);
export default SvgNoEye;
