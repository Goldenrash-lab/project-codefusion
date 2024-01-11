const NavigationHome = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    // style={{
    //   filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.50))',
    // }}
  >
    <g filter="url(#filter0_d_1_145)">
      <rect x="10" y="7" width="15" height="15" rx="4" fill="#FBFBFB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7C10.8954 7 10 7.89543 10 9V23C10 24.1046 10.8954 25 12 25H26C27.1046 25 28 24.1046 28 23V9C28 7.89543 27.1046 7 26 7H12ZM17.8 17.1176V21H14.8V15.8235H13L19 10L25 15.8235H23.2V21H20.2V17.1176H17.8Z"
        fill="#734AEF"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_145"
        x="-3"
        y="-3"
        width="44"
        height="44"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
        primitiveUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0 0.886275 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_145"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_145"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default NavigationHome;
