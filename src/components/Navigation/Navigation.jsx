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
            <div
              style={{
                width: '18px',
                height: '18px',
                filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.50))',
              }}
            >
              <NavigationHome />
            </div>
            Home
          </NavigationNavLink>
          <NavigationNavLink to="/statistics">
            <StatisticsHome />
            Statistics
          </NavigationNavLink>
        </NavigationSection>
      </div>
    </>
  );
};

export default Navigation;
