import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import mobiles from "../data/mobiles.json";
import "./MoreInfo.css";

const MobileMoreInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const matchedProduct = mobiles.find((item) => item.id === parseInt(id));
    setProduct(matchedProduct);
  }, [id]);

  if (!product) return <div>Loading product...</div>;

  return (
    <div className="more-info-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="rating">
          <strong>Rating:</strong> {product.rating} ⭐ ({product.totalRatings} Ratings & {product.reviews} Reviews)
        </p>
        <p className="price">
          ₹{product.price}
        </p>
        <p className="description">
          <strong>Description:</strong> {product.details}
        </p>

        <div className="more-info-links">
          <button className="btn"><Link to="/">← Home</Link></button>
          <button className="btn"><Link to="/cart">🛒 Cart</Link></button>
          <button className="btn"><Link to="/mobileProducts">⚡ Buy Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default MobileMoreInfo;
