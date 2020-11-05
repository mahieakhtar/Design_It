import React from "react";
import "./SubHeader.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "../../StateProvider";
import SearchIcon from "@material-ui/icons/Search";

function SubHeader() {
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    <nav className="subheader">
      <Link to="/women" className="subheader_link">
        <div className="subheader_optionleft">
          <span>Women </span>
        </div>
      </Link>
      <Link to="/men" className="subheader_link">
        <div className="subheader_optionleft">
          <span>Men</span>
        </div>
      </Link>
      <Link to="/children" className="subheader_link">
        <div className="subheader_optionleft">
          <span>Children</span>
        </div>
      </Link>

      <Link to="/search" className="subheader_link">
        <div className="subheader_optionleft">
          <SearchIcon />
        </div>
      </Link>

      <Link to="/women" className="subheader_butikName">
        <h1>
          <i>DesignIt</i>
        </h1>
      </Link>

      <Link to="/login" className="subheader_link">
        <div className="subheader_optionright">
          <img
            className="subheader_logo"
            src="https://mosaic02.ztat.net/lny/reef/images/5fab1650d205a0524e2a30411cc4e9d9.svg"
            alt=""
          />
          <span>Log in</span>
        </div>
      </Link>
      <Link to="/wishinglist" className="subheader_link">
        <div className="subheader_optionright">
          <img
            className="subheader_logo"
            src="https://mosaic02.ztat.net/lny/reef/images/32be21deb852a3304a9cccd0b827a3e1.svg"
            alt=""
          />
          <span>Wishlist</span>
        </div>
      </Link>
      <Link to="/checkout" className="subheader_link">
        <div className="subheader_optionright">
          <AddShoppingCartIcon />
          <span>Cart {basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default SubHeader;
