import React from 'react'
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn'
import "./Cart.css"

const Cart = ({cart}) => {
  return (
    <div>
      <GoBackBtn />
      {cart?.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-image" />
            <p>
              {item.title} - ${item.price * item.count} (x{item.count})
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart