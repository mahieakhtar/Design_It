import React from "react";
import "./MainHeader.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="mainheader">
      <Link to="/" className="mainheader_link">
        <div className="mainheader_option">
          <span className="mainheader_option1">
            ALL DENMARK'S FAVORITE BRANDS
          </span>
        </div>
      </Link>
      <Link to="/" className="mainheader_link">
        <div className="mainheader_option">
          <span className="mainheader_option2">FREE DELIVERY AND RETURN*</span>
        </div>
      </Link>
      <Link to="/" className="mainheader_link">
        <div className="mainheader_option">
          <span>100 DAY RETURN</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
