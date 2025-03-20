import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/cart"
      >
        Cart
      </NavLink>
    </nav>
  );
};

export default Nav;
