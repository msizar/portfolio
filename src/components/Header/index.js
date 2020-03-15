import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import styles from './styles';
import './header.css';

const Header = (props) => {
  const { navLinks, logo } = props;
  const classes = styles();


  return (
    <header className="app-header">
      <div className={classes.headerNavBox}>
        <div className={classes.headerLogoContainer}>
          <Link className={classes.headerLogo} to="/">{logo}</Link>
        </div>

        <div className={classes.headerAppNav}>
          { navLinks.map((link) => (
            <NavLink
              className={classes.AppLink}
              key={link}
              activeClassName={classes.activeAppLink}
              to={`/${link}`}
              exact
            >
              {link}
            </NavLink>
          )) }

        </div>

      </div>
    </header>
  );
};

Header.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.node.isRequired,
};


export default Header;
