import React from "react";
import ProductList from "../product/ProductList";
import "./Men.css";

function Men() {
  return (
    <div className="men">
      <img
        className="men_image"
        src="https://www.abbotkinneyonline.com/wp-content/uploads/2018/11/The-Top-Men%E2%80%99s-Clothing.jpg"
        alt=""
      />
      <div className="men_row">
        <ProductList gender="men" />
      </div>
    </div>
  );
}

export default Men;
