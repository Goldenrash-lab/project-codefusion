import React from 'react';

import NavigationHome from '../../images/Navigation/NavigationHomeIcon';
import StatisticsHome from 'images/Navigation/StatisticsHomeIcon';
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
