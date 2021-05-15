import React from 'react';
import classes from './Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <p>Logo /.</p>
      </div>
      <div className={classes.menu}>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <a href="#">
          <FaShoppingCart className={classes.icon} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
