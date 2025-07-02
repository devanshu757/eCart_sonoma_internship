import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import accessories from "../data/accessories.json";
import "./MoreInfo.css";

const AccessoriesMoreInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const matchedProduct = accessories.find((item) => item.id === parseInt(id));
    setProduct(matchedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="more-info-container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "150px" }} />
      <p>
        <strong>Rating:</strong> {product.rating}
      </p>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.details}
      </p>
    </div>
  );
};

export default AccessoriesMoreInfo;
