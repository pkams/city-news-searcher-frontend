import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <h3 className="navigation__title">NewsSearcher</h3>
      <div className="navigation__menu">
        <NavLink to="/" className="navigation__menu-item">
          Home
        </NavLink>
        <NavLink to="main" className="navigation__menu-item">
          Webapp
        </NavLink>
      </div>
    </nav>
  );
}
