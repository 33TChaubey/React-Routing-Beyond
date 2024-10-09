import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="mt-10 flex justify-center gap-10 font-semibold">
      <NavLink
        className={(e) =>
          [e.isActive ? 'text-red-500' : '', e.isActive ? 'font-bold' : ''].join(' ')
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/about">
        AboutUs
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/user">
        User
      </NavLink>
    </nav>
  );
};

export default Nav;
