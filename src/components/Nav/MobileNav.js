import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const MobileNav = ({ mobileToggle, mobileView, toggleBtn }) => {
  const overlay = cx({
    overlay: true,
    'overlay--active': mobileToggle && mobileView,
    'overlay--hidden': !mobileToggle || !mobileView,
  });
  const mobileSlide = cx({
    'mobile-nav': true,
    'mobile-nav--slide-out': mobileToggle && mobileView,
  });
  return (
    <div>
      <div className={overlay} />
      <div className={mobileSlide}>
        <ul className="mobile-nav__list">
          <span className="mobile-nav__list__item mobile-nav__list__item__close-icon">
            <span
              className="mobile-nav__list__item__close-icon--close"
              onClick={toggleBtn}
              role="button"
              tabIndex={1}
            >
              <i className="far fa-times-circle" />
            </span>
          </span>

          <Link className="mobile-nav__list__item" to="/">
            <li>Covid 19 Map</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
