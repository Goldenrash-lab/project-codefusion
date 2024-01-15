import React, { useEffect } from 'react';

import NavigationHome from '../../images/Navigation/NavigationHomeIcon';
import StatisticsHome from 'images/Navigation/StatisticsHomeIcon';
import NavigationHomeMobail from 'images/Navigation/NavigationHomeMobail';
import NavigationStatistictMobail from 'images/Navigation/NavigationHomeActive';
import NavigationCurenciMobail from 'images/Navigation/NavigationHomeCurensi';
import {
  NavigationDivTest,
  NavigationDivTest2,
  NavigationIconDivFon,
  NavigationNavLink,
  NavigationPText,
  NavigationSection,
} from './NavigationStyles';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';

const Navigation = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile && navigate) {
        navigate('/');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, navigate]);

  return (
    <div>
      <NavigationSection>
        <NavigationNavLink to="/">
          <NavigationDivTest2>
            <NavigationDivTest>
              <NavigationIconDivFon></NavigationIconDivFon>
              {isMobile ? <NavigationHomeMobail /> : <NavigationHome />}
            </NavigationDivTest>
          </NavigationDivTest2>
          <NavigationPText>Home</NavigationPText>
        </NavigationNavLink>
        <NavigationNavLink to="/statistics">
          <NavigationDivTest2>
            <NavigationDivTest>
              <NavigationIconDivFon></NavigationIconDivFon>
              {isMobile ? <NavigationStatistictMobail /> : <StatisticsHome />}
            </NavigationDivTest>
          </NavigationDivTest2>
          <NavigationPText>Statistics</NavigationPText>
        </NavigationNavLink>
        {isMobile && (
          <NavigationNavLink to="/currency">
            <NavigationDivTest2>
              <NavigationDivTest>
                <NavigationIconDivFon></NavigationIconDivFon>
                <NavigationCurenciMobail />
              </NavigationDivTest>
            </NavigationDivTest2>
          </NavigationNavLink>
        )}
      </NavigationSection>
    </div>
  );
};

export default Navigation;
