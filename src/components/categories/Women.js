import React from "react";
import ProductList from "../product/ProductList";
import "./Women.css";

function Women() {
  return (
    <div className="women">
      <img
        className="women_image"
        src="https://image.freepik.com/free-photo/fashion-women-s-clothes-shopping-mall-windows_1112-5261.jpg"
        alt=""
      />
      <div className="women_row">
        <ProductList gender="women" />
      </div>
    </div>
  );
}

export default Women;
