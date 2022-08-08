import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/headerPart/Header.css";

const Navigation = () => {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <div className="header-title">
          <NavLink to="/"> Shopping Cart</NavLink>
        </div>
        <ul className="cart-login">
          <li className="link-items">
            <NavLink to="/"> Cart </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
