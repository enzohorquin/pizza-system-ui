import React, { useState, useEffect } from 'react';
import DskTpNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [mobileView, setMobileView] = useState(true);
  const updateDimensions = () => {
    window.innerWidth > 500 ? setMobileView(false) : setMobileView(true);
  };
  const handleClick = () => {
    setMobileToggle(!mobileToggle);
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
  }, []);

  return (
    <>
      <DskTpNav toggleBtn={handleClick} />
      <MobileNav
        toggleBtn={handleClick}
        mobileToggle={mobileToggle}
        mobileView={mobileView}
      />
    </>
  );
};
export default Nav;
