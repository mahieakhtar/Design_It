import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Get the Look</span>
        </div>
      </Link>

      <Link to="/" className="header_link">
        <div className="header_option">
          <span>News</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Clothing</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Shoe</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Sport</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Accessories</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Designer fashion</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Beauty</span>
        </div>
      </Link>
      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Brands</span>
        </div>
      </Link>

      <Link to="/" className="header_link">
        <div className="header_option">
          <span>Outlet</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
