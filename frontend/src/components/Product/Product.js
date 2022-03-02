import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({ imageUrl, price, description, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div>
        <p className="info__name">{name}</p>
        <p className="info__description">{description}</p>
        <p className="info__price">${price}</p>
        <Link to={`/products/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
