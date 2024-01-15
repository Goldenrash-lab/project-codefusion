import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  height: 80px;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;

  @media only screen and (max-width: 767px) {
    height: 60px;
  }
`;

export const HeaderImgLogo = styled.img``;

export const HeaderDivLogo = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    gap: 9px;
  }
`;
export const HeaderDivExit = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const HeaderDivContainer = styled.div`
  padding-top: 16px;
  padding-right: 16px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  max-width: 1248px;
  margin: 0 auto;

  @media only screen and (max-width: 1272px) {
    max-width: 767px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and (max-width: 767px) {
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const HeaderSpanName = styled.span`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  text-align: right;
  padding-right: 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (max-width: 767px) {
    padding-right: 0px;
  }
`;
export const HeaderExitDivIcon = styled.div`
  opacity: 0.6;
  height: 17px;
`;
export const HeaderSpanExit = styled.span`
  color: var(--white-60, rgba(255, 255, 255, 0.6));

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 8px;
`;

export const HeaderButtonExit = styled.button`
  text-decoration: none;
  cursor: pointer;
  border: none;
  outline: transparent;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  transition: font-weight 0.5s ease;
  &:hover,
  &:focus {
    ${HeaderSpanExit} {
      font-weight: 700;
      color: #ffffff;
    }
    ${HeaderExitDivIcon} {
      opacity: 10;
    }
  }
`;
// @media only screen and (max-width: 767px) {

//     }

export const HeaderSpanLogoText = styled.span`
  color: var(--white, #fbfbfb);
  font-size: 17px;
  font-weight: 400;
  @media only screen and (max-width: 767px) {
    color: var(--white, #fbfbfb);
    font-size: 13px;
    font-weight: 400;
  }
`;

export const HeaderDivLogoContainerSvg = styled.div`
  width: 18px;
  height: 18px;
`;
