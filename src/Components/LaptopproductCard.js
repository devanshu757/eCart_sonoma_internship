import React, { useEffect } from "react";
import LaptopProductList from "./LaptopProductList.js";
import LaptopCategories from "./LaptopCategories.js";
import laptops from "../data/laptops.json";
import "./ProductCard.css";
import { useSelector } from "react-redux";

export default function LaptopProductCard() {
  const [filteredData, setFilteredData] = React.useState([]);
  const selectedFilters = useSelector((state) => state.filter.selectedFilters);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const maxPrice = useSelector((state) => state.filter.maxPrice);

  useEffect(() => {
    let result = laptops;
    console.log("laptop", result, laptops);
    // Category filter
    if (selectedFilters.length > 0) {
      result = result.filter((mobile) =>
        selectedFilters.includes(mobile.category)
      );
    }

    // Price filter
    if (minPrice !== "" && maxPrice !== "") {
      const min = parseInt(minPrice, 10);
      const max = parseInt(maxPrice, 10);

      result = result.filter((mobile) => {
        return mobile.price >= min && mobile.price <= max;
      });
    }

    setFilteredData(result);
  }, [selectedFilters, minPrice, maxPrice]);

  return (
    <div className="main-container">
        <div className="sidebar">
          <LaptopCategories />
        </div>
        <div className="content">
          <div className="product-grid">
            {filteredData.map((element, index) => (
              <LaptopProductList
                key={element.id || index}
                id={element.id || index}
                image={element.image}
                title={element.title}
                rating={element.rating}
                price={element.price}
                category={element.category}
              />
            ))}
          </div>
        </div>
      </div>
  );
}







// import React from 'react';
// import LaptopProductList from './LaptopProductList.js';
// import laptops from '../data/laptops.json';
// import LaptopCategories from './LaptopCategories.js';
// import './ProductCard.css'; 

// export default function LaptopProductCard() {
//   return (
//     <div>
//       <LaptopCategories />
//       <div className="product-grid">
//         {laptops.map((element, index) => (
//           <LaptopProductList
//             key={element.id || index}
//             id={element.id || index}
//             image={element.image}
//             title={element.title}
//             rating={element.rating}
//             price={element.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
