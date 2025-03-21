import React from "react";
import { NavLink } from "react-router-dom";
import "./Products.css";

const Products = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      {products.map((prod) => {
        return (
          <div key={prod.id} className="product-card">
            <h2 className="product-title">{prod.title}</h2>
            <NavLink to={`/product/${prod.id}`}>
              <img
                className="product-image"
                src={prod.image}
                alt={prod.title}
              />
            </NavLink>
            <button className="product-btn" onClick={() => addToCart(prod)}>
              Buy
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
