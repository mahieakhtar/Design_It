import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, name, price, category, gender, brand, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      name: name,
      image: image,
      price: price,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_name">{name}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
