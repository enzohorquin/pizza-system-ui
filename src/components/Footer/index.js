import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__icons">
      <a
        href="https://github.com/enzohorquin"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-github footer__icons__icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/enzo-nicolas-horquin-733190123/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-linkedin footer__icons__icon" />
      </a>
    </div>

    <ul className="footer__list">
      <li className="footer__list__item">
        <Link to="/" className="footer__list__item__link">
          Menu
        </Link>
      </li>
      <p className="footer__list__pipe">|</p>
      <li className="footer__list__item">
        <Link to="/cart" className="footer__list__item__link">
          Cart
        </Link>
      </li>
      <p className="footer__list__pipe">|</p>
      <li className="footer__list__item">
        <Link to="/order-history" className="footer__list__item__link">
          Order History
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
