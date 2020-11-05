import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket.length === 0 ? (
          <div>
            <h2>Your shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or 'Add to basket'
              next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_name">Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                category={item.category}
                gender={item.gender}
                brand={item.brand}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
