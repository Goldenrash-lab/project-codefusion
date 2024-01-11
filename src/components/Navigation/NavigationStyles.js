import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationSection = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 28px;
  padding-left: 16px;
`;

export const NavigationNavLink = styled(NavLink)`
  display: flex;
  align-content: center;
  align-items: center;
  gap: 20px;
`;
