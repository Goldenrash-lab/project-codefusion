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

export const NavigationNavLink = styled(NavLink)`
  display: flex;
  align-content: center;
  align-items: center;
  gap: 20px;
  &:hover,
  &:focus {
    font-weight: 700;
  }

  &.active {
    font-weight: 700;
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
