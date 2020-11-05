import React from "react";
import ProductList from "../product/ProductList";
import "./Children.css";

function Children() {
  return (
    <div className="children">
      <img
        className="children_image"
        src="https://img.abercrombie.com/is/image/anf/kids-2019_1017_NEW_FLYOUT_B_US-2?$marketing$"
        alt=""
      />
      <div className="children_row">
        <ProductList gender="kid" />
      </div>
    </div>
  );
}

export default Children;
