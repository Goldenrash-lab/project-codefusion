import React from 'react';

import NavigationHome from '../../images/Navigation/NavigationHomeIcon';
import StatisticsHome from 'images/Navigation/StatisticsHomeIcon';
import {
  NavigationDivTest,
  NavigationNavLink,
  NavigationSection,
} from './NavigationStyles';

const Navigation = () => {
  return (
    <>
      <div>
        <NavigationSection>
          <NavigationNavLink to="/">
            <NavigationDivTest>
              <NavigationHome />
            </NavigationDivTest>
            Home
          </NavigationNavLink>
          <NavigationNavLink to="/statistics">
            <NavigationDivTest>
              <StatisticsHome />
            </NavigationDivTest>
            Statistics
          </NavigationNavLink>
        </NavigationSection>
      </div>
    </>
  );
};

export default Navigation;
