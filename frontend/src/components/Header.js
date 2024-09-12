import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Task Management System</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
