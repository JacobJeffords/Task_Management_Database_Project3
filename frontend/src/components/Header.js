import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1 id="pageHeader">Task Management</h1>
      <ul>
        <li id="links">
          <NavLink exact to="/" activeClassName="active">
            Main
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
