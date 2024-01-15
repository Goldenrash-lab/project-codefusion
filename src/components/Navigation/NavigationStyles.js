import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationSection = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 28px;
  padding-left: 16px;
  gap: 12px;
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 65px;
    padding-right: 65px;

    gap: 32px;
    align-items: center;
  }
`;

export const NavigationDivTest = styled.div`
  width: 18px;
  height: 18px;
  @media only screen and (max-width: 767px) {
    width: 38px;
    height: 38px;
  }
`;

export const NavigationNavLink = styled(NavLink)`
  position: relative;
  max-width: 150px;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
  gap: 20px;
  padding: 3.5px 0;
  &:hover,
  &:focus {
    font-weight: 700;
    transition: font-weight 0.5s ease;
  }

  &.active {
    div > div > div + svg > path {
      fill: #734aef;
    }
    div > div > div {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: #ffffff;
      border-radius: 10px;
      top: 3px;
      left: 4px;
      z-index: -1;
      @media only screen and (min-width: 768px) {
        width: 15px;
        height: 15px;
        top: 1px;
        left: 2px;
      }
      /* filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5)); */
    }
    div > div {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
  @media only screen and (max-width: 767px) {
    &:hover,
    &:focus {
      font-weight: 700;
      transition: font-weight 0.5s ease;
    }

    /* &.active {
      font-weight: 700;
      div {
        width: 38px;
        height: 38px;

        background-color: #fff;
        border-radius: 5px;
        filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        svg > path {
          fill: #734aef;
        }
      }
    } */
  }
`;

export const NavigationSpanHome = styled.span`
  font-weight: 400;

  &:hover,
  &:focus {
    font-weight: 700;
  }
  &.active {
    font-weight: 700;
  }
`;

export const NavigationIconDivFon = styled.div`
  /* position: absolute;
  width: 30px;
  height: 30px;
  background-color: aqua;
  border-radius: 10px;
  top: 3px;
  left: 4px;
  z-index: -1; */
  /* display: none; */
`;
export const NavigationSpanStatistics = styled.span`
  font-weight: 400;
  &:hover,
  &:focus {
    font-weight: 700;
  }
  &.active {
    font-weight: 700;
  }

  &.active + .homeNavigation {
    fill: aqua;
    stroke: aqua;
    color: aqua;
  }
`;

export const NavigationDivTest2 = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

export const NavigationNavLinkCurrency = styled(NavLink)``;

export const NavigationDivTest3 = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

export const NavigationPText = styled.p`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
