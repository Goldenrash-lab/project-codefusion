import * as React from 'react';
import styled from 'styled-components';

export const HomeIconSvg = styled.svg`
  @media only screen and (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
`;

const HeaderLogo = props => (
  <HomeIconSvg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="23"
    viewBox="0 0 25 23"
    fill="none"
  >
    <g clipPath="url(#clip0_1_236)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0684 3.08869C15.4051 2.69093 13.7418 1.89542 12.4942 0.702148C11.2467 1.89542 9.58339 2.69093 7.92004 3.08869C8.33588 6.6685 9.58339 9.05504 12.4942 11.0438C15.4051 9.05504 17.0684 6.6685 17.0684 3.08869Z"
        fill="#FFB627"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4051 17.8989L3.76166 4.77295V11.1371L12.9101 21.081L15.4051 17.8989Z"
        fill="#FBFBFB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6529 16.7058L21.643 11.1372V5.1709L13.7421 13.9215L16.6529 16.7058Z"
        fill="#FBFBFB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0687 18.6948V22.2746L21.6429 17.1037V13.5239L17.0687 18.6948Z"
        fill="#FBFBFB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33586 18.6948L3.76166 13.5239V17.1037L8.33586 22.2746V18.6948Z"
        fill="#FBFBFB"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_236">
        <rect
          width="23.4894"
          height="22.4681"
          fill="white"
          transform="translate(0.957458)"
        />
      </clipPath>
    </defs>
  </HomeIconSvg>
);

export default HeaderLogo;
