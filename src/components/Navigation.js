import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="main">Webapp</NavLink>
    </div>
  );
}
