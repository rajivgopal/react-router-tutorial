import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "green"
  };

  return (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
