import React from "react";
import "./Product.css";
import { productItems } from "./ProductItem";
import Product from "./Product";

const ProductList = (gender) => {
  return (
    <div className="product_row">
      {productItems.map((product) => {
        console.log("Product" + product.gender);
        console.log("GENDER" + gender.gender);
        if (gender.gender === product.gender) {
          console.log("HIHII" + product.gender);
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
        } else if (gender.gender === "All") {
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

export default ProductList;
