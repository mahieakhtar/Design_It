import React from "react";
import "../product/Product.css";
import { productItems } from "../product/ProductItem";
import Product from "../product/Product";

const SearchList = (prod) => {
  return (
    <div className="product_row">
      {productItems.map((product) => {
        // console.log("PD" + product.name);
        // console.log("PDA" + prod.name);
        if (product.name.toLowerCase().indexOf(prod.name.toLowerCase()) > -1) {
          return (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              gender={product.gender}
              brand={product.brand}
              image={product.image}
            />
          );
        }
      })}
    </div>
  );
};

export default SearchList;
