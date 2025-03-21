import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    function handleProductReq() {
      fetch(`https://fakestoreapi.com/products/${id}`) 
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }

    handleProductReq();
  }, [id]); 

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="product-section">
      <GoBackBtn />
      <div className="product-container">
        <h3 className="product-title">{product.title}</h3>
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <p className="product-description">{product.description}</p>
        <strong className="product-price">{product.price}$</strong>
        <p className="product-rating">Rating: {product.rating?.rate}</p>
      </div>
    </div>
  );
};

export default Product;
