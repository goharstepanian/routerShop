import React, { useState } from "react";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import "./Cart.css";

const Cart = ({ cart, handleChangeQuantity,handleRemoveItem }) => {
  const plus = (item) => {
    handleChangeQuantity(item.id, item.count + 1);
  };

  const minus = (item) => {
    if (item.count > 1) {
      handleChangeQuantity(item.id, item.count - 1);
    }
  };

  const removeItem = (itemId) => {
    handleRemoveItem(itemId);
  };
  return (
    <div>
      <GoBackBtn />
      {cart?.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-image" />
            <div>
              <p>{item.title}</p>
              <p> ${(item.price * item.count).toFixed(2)}</p>
              <div className="btns">
                <div>
                  {" "}
                  <button onClick={() => plus(item)} className="btn">+</button>
                  <span>{item.count}</span>
                  <button onClick={() => minus(item)} className="btn">-</button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
