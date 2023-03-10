import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Header;
