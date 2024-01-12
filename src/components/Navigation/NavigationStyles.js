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
`;

export const NavigationDivTest = styled.div`
  width: 18px;
  height: 18px;
`;

export const NavigationNavLink = styled(NavLink)`
  max-width: 150px;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
  gap: 20px;
  &:hover,
  &:focus {
    font-weight: 700;
    transition: font-weight 0.5s ease;
  }

  &.active {
    font-weight: 700;
    div {
      width: 18px !important;
      height: 18px !important;

      background-color: #fff;
      border-radius: 3px;
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      svg > path {
        fill: #734aef;
      }
    }
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
