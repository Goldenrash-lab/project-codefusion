import * as React from 'react';

const Logo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path
        fill="#FFC727"
        d="M24.683 4.945c-2.546-.637-5.092-1.91-7.001-3.821-1.91 1.91-4.455 3.184-7 3.821.636 5.732 2.545 9.553 7 12.737 4.455-3.184 7-7.005 7-12.737Z"
      />
      <path
        fill="#FBFBFB"
        d="M22.137 28.658 4.317 7.642v10.19l14 15.92 3.82-5.094ZM24.046 26.748l7.637-8.916V8.279l-12.092 14.01 4.455 4.459ZM24.683 29.932v5.732l7-8.28v-5.731l-7 8.279ZM11.317 29.932l-7-8.28v5.732l7 8.28v-5.732Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.025 0h35.95v35.974H.026z" />
      </clipPath>
    </defs>
  </svg>
);
export default Logo;
