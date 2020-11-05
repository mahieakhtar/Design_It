import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, name, price, gender, brand, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        brand: brand,
        name: name,
        price: price,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>
          <strong>{brand}</strong>
          <img
            className="subheader_logo"
            src="https://mosaic02.ztat.net/lny/reef/images/32be21deb852a3304a9cccd0b827a3e1.svg"
            alt=""
          />
        </p>
        <p>{name}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addtoBasket}>Add to Baskets</button>
    </div>
  );
}

export default Product;
