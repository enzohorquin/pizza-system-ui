/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const DesktopNav = ({ toggleBtn }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <div className="row-container">
          <span className="nav__list__section">
            <span
              role="button"
              tabIndex={0}
              className="nav__list__section__mobile-icon"
              onClick={toggleBtn}
            >
              <i className="fas fa-bars" />
            </span>
            <Tooltip title="Menu" aria-label="menu">
              <Link className="nav__list__section" to="/">
                <li className="nav__list__section__text">
                  <i className="fas fa-utensils" />
                </li>
              </Link>
            </Tooltip>
            <Tooltip title="Cart" aria-label="cart">
              <Link className="nav__list__section" to="/cart">
                <li className="nav__list__section__text">
                  <i className="fas fa-shopping-cart" />
                </li>
              </Link>
            </Tooltip>
            <Tooltip title="Order History" aria-label="Order History">
              <Link className="nav__list__section" to="/order-history">
                <li className="nav__list__section__text">
                  <i className="fas fa-history" />
                </li>
              </Link>
            </Tooltip>
          </span>
        </div>
      </ul>
    </nav>
  );
};

DesktopNav.propTypes = {
  toggleBtn: PropTypes.func.isRequired,
};

export default DesktopNav;
