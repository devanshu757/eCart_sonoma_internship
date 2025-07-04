import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import accessories from "../data/accessories.json";
import "./MoreInfo.css";

const MobileMoreInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const matchedProduct = accessories.find((item) => item.id === parseInt(id));
    setProduct(matchedProduct);
  }, [id]);

  if (!product) return <div>Loading product...</div>;

  return (
    <div className="more-info-header">
  
          <button className="btn"><Link to="/mobileProducts">←  Back To Products</Link></button>
        
    <div className="more-info-container">
      
      <div className="product-image1">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="rating">
          <strong>Ratings:</strong> ⭐ {product.rating}  
        </p>
        <p className="price">
          ₹{product.price}
        </p>
        <p className="description">
          <strong>Description:</strong> {product.details}
        </p>

        </div>
      </div>
    </div>
  );
};

export default MobileMoreInfo;