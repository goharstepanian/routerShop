import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Products.css";

const Products = ({ products }) => {
  let navigate = useNavigate();

  const Buy = (prod) => navigate("/cart", { state: prod });

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
            <button className="product-btn" onClick={() => Buy(prod)}>
              Buy
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
