import React from 'react';

import NavigationHome from '../../images/Navigation/NavigationHome';
import StatisticsHome from 'images/Navigation/StatisticsHome';
import { NavigationNavLink, NavigationSection } from './NavigationStyles';

const Navigation = () => {
  return (
    <>
      <div>
        <NavigationSection>
          <NavigationNavLink to="/">
            <NavigationHome />
            <span>Home</span>
          </NavigationNavLink>
          <NavigationNavLink to="/statistics">
            <StatisticsHome />
            <span>Statistics</span>
          </NavigationNavLink>
        </NavigationSection>
      </div>
    </>
  );
};

export default Navigation;
