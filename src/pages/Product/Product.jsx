import React from "react";
import { useParams } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import "./Product.css";

const Product = ({ products }) => {
  const { id } = useParams();
  let obj = products.find((prod) => prod.id === +id);

  return (
    <div className="product-section">
      <GoBackBtn />
      <div className="product-container">
        <h3 className="product-title">{obj.title}</h3>
        <img className="product-image" src={obj.image} alt={obj.title} />
        <p className="product-description">{obj.description}</p>
        <strong className="product-price">{obj.price}$</strong>
        <p className="product-rating">Rating: {obj.rating.rate}</p>
      </div>
    </div>
  );
};

export default Product;
