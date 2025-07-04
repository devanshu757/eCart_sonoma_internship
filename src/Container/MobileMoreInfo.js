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




// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import mobiles from "../data/mobiles.json";
// import "./MoreInfo.css";

// const MobileMoreInfo = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const matchedProduct = mobiles.find((item) => item.id === parseInt(id));
//     setProduct(matchedProduct);
//     setCurrentImageIndex(0); // reset carousel
//   }, [id]);

//   const nextImage = () => {
//     if (!product || !product.image) return;
//     setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
//   };

//   const prevImage = () => {
//     if (!product || !product.image) return;
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? product.image.length - 1 : prev - 1
//     );
//   };

//   if (!product) return <div>Loading product...</div>;

//   return (
//     <div className="more-info-header">
//       <button className="btn">
//         <Link to="/mobileProducts">← Back To Products</Link>
//       </button>

//       <div className="more-info-container">
//         <div className="product-image1">
//           <button className="carousel-btn left" onClick={prevImage}>‹</button>
//           <img
//   src={product.image?.[currentImageIndex] || ""}
//   alt={product.title}
//   className="carousel-image"
// />

//           <button className="carousel-btn right" onClick={nextImage}>›</button>
//         </div>

//         <div className="product-details">
//           <h1>{product.title}</h1>
//           <p className="rating">
//             <strong>Ratings:</strong> ⭐ {product.rating}
//           </p>
//           <p className="price">₹{product.price}</p>
//           <p className="description">
//             <strong>Description:</strong> {product.details}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMoreInfo;

