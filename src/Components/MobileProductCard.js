import React, { useEffect, useState } from "react";
import MobileProductList from "./MobileProductList.js";
import PhoneCategories from "./PhoneCategories.js";
import mobiles from "../data/mobiles.json";
import "./ProductCard.css";
import { useSelector } from "react-redux";

export default function MobileProductCard() {
  const [filteredData, setFilteredData] = useState([]);
  const selectedFilters = useSelector((state) => state.filter.selectedFilters);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const maxPrice = useSelector((state) => state.filter.maxPrice);

  useEffect(() => {
    let result = mobiles;
    console.log("mobile", result, mobiles);
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
          <PhoneCategories />
        </div>
        <div className="content">
          <div className="product-grid">
            {filteredData.map((element, index) => (
              <MobileProductList
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



















// import React, { useState, useEffect } from "react";
// import MobileProductList from "./MobileProductList.js";
// import mobiles from "../data/mobiles.json";
// import PhoneCategories from "./PhoneCategories.js";
// import "./ProductCard.css";

// export default function MobileProductCard({ cartState }) {
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [filteredData, setFilteredData] = useState(mobiles);
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   useEffect(() => {
//     let result = mobiles;

//     // Category filter
//     if (selectedFilters.length > 0) {
//       result = result.filter((mobile) =>
//         selectedFilters.includes(mobile.category)
//       );
//     }

//     // Price filter
//     if (minPrice !== "" && maxPrice !== "") {
//       const min = parseInt(minPrice, 10);
//       const max = parseInt(maxPrice, 10);

//       result = result.filter((mobile) => {

//         return mobile.price >= min && mobile.price <= max;
//       });
//     }

//     setFilteredData(result);
//   }, [selectedFilters, minPrice, maxPrice]);

//   return (
//     <div>
//       <PhoneCategories
//         selectedFilters={selectedFilters}
//         setSelectedFilters={setSelectedFilters}
//         minPrice={minPrice}
//         setMinPrice={setMinPrice}
//         maxPrice={maxPrice}
//         setMaxPrice={setMaxPrice}
//       />
//       <div className="product-grid">
//         {filteredData.map((element, index) => (
//           <MobileProductList
//             key={element.id || index}
//             id={element.id || index}
//             image={element.image}
//             title={element.title}
//             rating={element.rating}
//             price={element.price}
//             category={element.category}
//             size={cartState}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import MobileProductList from "./MobileProductList.js";
// import mobiles from "../data/mobiles.json";
// import PhoneCategories from "./PhoneCategories.js";
// import "./ProductCard.css";

// export default function MobileProductCard({ cartState }) {
//   const [selectedFilters, setSelectedFilters] = useState([]); // redux
//   const [filteredData, setFilteredData] = useState(mobiles);
//   const [minPrice, setMinPrice] = useState();
//   const [maxPrice, setMaxPrice] = useState();

//   useEffect(() => {
//     if (selectedFilters.length === 0) {
//       setFilteredData(mobiles);
//     } else {
//       const filtered = mobiles.filter((mobile) =>
//         selectedFilters.includes(mobile.category)
//       );
//       setFilteredData(filtered);
//     }
//   }, [selectedFilters]);

//   // useEffect(() => {
//   //   const filtered = mobiles.filter((mobile) => {
//   //     const numericPrice = parseInt(mobile.price.replace(/[^0-9]/g, ''), 10); // remove ₹ and commas
//   //     return numericPrice >= minPrice && numericPrice <= maxPrice;
//   //   });
//   //   setFilteredData(filtered);
//   // }, [minPrice, maxPrice]);

//   useEffect(() => {
//     if (minPrice === undefined || maxPrice === undefined) {
//       setFilteredData(mobiles);
//       return;
//     }
//     if (minPrice === "" || maxPrice === "") {
//       setFilteredData(mobiles);
//       return;
//     } else {
//     const priceFilteredData = mobiles.filter(
//       (mobile) => mobile.price >= minPrice && mobile.price <= maxPrice
//     );
//     setFilteredData(priceFilteredData);
//  }, [minPrice, maxPrice]);
// }

//   return (
//     <div>
//       <PhoneCategories
//         selectedFilters={selectedFilters}
//         setSelectedFilters={setSelectedFilters}
//         minPrice={minPrice}
//         setMinPrice={setMinPrice}
//         maxPrice={maxPrice}
//         setMaxPrice={setMaxPrice}
//       />
//       <div className="product-grid">
//         {filteredData.map((element, index) => (
//           <MobileProductList
//             key={element.id || index}
//             id={element.id || index}
//             image={element.image}
//             title={element.title}
//             rating={element.rating}
//             price={element.price}
//             category={element.category}
//           size = {cartState}/>
//         ))}
//       </div>
//     </div>
//   );
// }
