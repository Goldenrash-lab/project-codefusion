import React from 'react';

import NavigationHome from '../../images/Navigation/NavigationHomeIcon';
import StatisticsHome from 'images/Navigation/StatisticsHomeIcon';
import {
  NavigationNavLink,
  NavigationSection,
  NavigationSpanHome,
  NavigationSpanStatistics,
} from './NavigationStyles';

const Navigation = () => {
  return (
    <>
      <div>
        <NavigationSection>
          <NavigationNavLink to="/">
            <div
              style={{
                filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.50))',
              }}
            >
              <NavigationHome />
            </div>

            <NavigationSpanHome>Home</NavigationSpanHome>
          </NavigationNavLink>
          <NavigationNavLink to="/statistics">
            <StatisticsHome />
            <NavigationSpanStatistics>Statistics</NavigationSpanStatistics>
          </NavigationNavLink>
        </NavigationSection>
      </div>
    </>
  );
};

export default Navigation;
