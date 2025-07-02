import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMaxPrice, setMinPrice, setSelectedFilters } from "../features/counter/filterSlice";
import "./Categories.css";
// import DiscreteSlider from "./Slider";


const PhoneCategories = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.filter.selectedFilters);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const maxPrice = useSelector((state) => state.filter.maxPrice);
  const categories = ["apple", "samsung", "motorola", "xiaomi", "oppo", "vivo"];

  const handleCategoryChange = (category) => {
    let updated;
    if (selectedFilters.includes(category)) {
      updated = selectedFilters.filter((item) => item !== category);
    } else {
      updated = [...selectedFilters, category];
    }
    dispatch(setSelectedFilters(updated)); 
  };

  return (
    <div className="filter-container"> 
      <div className="categories"> 
        <h2>Filtered Products</h2>
        <div className="checkbox-group">
          {categories.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={selectedFilters.includes(brand)}
                onChange={() => handleCategoryChange(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      <div className="price-range">
        <h2>Price Range</h2>
        <div className="price-inputs">
          <label htmlFor="min-price">Min Price:</label>
          <input
            type="number"
            id="min-price"
            name="min-price"
            placeholder="0"
            value={minPrice}
            onChange={(e) => dispatch(setMinPrice(e.target.value))}
          />
          <div className="slider">
            <input name="range" type="range" min="0" max="100000" value={minPrice} onChange={(e) => dispatch(setMinPrice(e.target.value))} />
          </div>
          <label htmlFor="max-price">Max Price:</label>
          <input
            type="number"
            id="max-price"
            name="max-price"
            placeholder="100000"
            value={maxPrice}
            onChange={(e) => dispatch(setMaxPrice(e.target.value))}
          />
          <div className="slider">
            <input name="range" type="range" min="0" max="100000" value={maxPrice} onChange={(e) => dispatch(setMaxPrice(e.target.value))} />
            {/* <DiscreteSlider /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCategories;













// const PhoneCategories = ({
//   selectedFilters,
//   setSelectedFilters,
//   minPrice, 
//   setMinPrice,
//   maxPrice,
//   setMaxPrice,
// }) => {
//   const categories = ["apple", "samsung", "motorola", "xiaomi", "oppo", "vivo"];

//   const handleCategoryChange = (category) => {
//     let updatedFilters;
//     if (selectedFilters.includes(category)) {
//       updatedFilters = selectedFilters.filter((item) => item !== category);
//     } else {
//       updatedFilters = [...selectedFilters, category];
//     }
//     setSelectedFilters(updatedFilters);
//   };

//   return (
//     <div className="categories">
//       <h2>Categories of Phone Company Filter</h2>
//       <div className="checkbox-group">
//         {categories.map((brand) => (
//           <label key={brand}>
//             <input
//               type="checkbox"
//               checked={selectedFilters.includes(brand)}
//               onChange={() => handleCategoryChange(brand)}
//             />
//             {brand}
//           </label>
//         ))}
//       </div>

//       <div className="price-range">
//         <h2>Price Range</h2>
//         <div className="price-inputs">
//           <label htmlFor="min-price">Min Price:</label>
//           <input
//             type="number"
//             id="min-price"
//             name="min-price"
//             placeholder="0"
//             value={minPrice}
//             onChange={(e) => setMinPrice(e.target.value)}
//           />

//           <label htmlFor="max-price">Max Price:</label>
//           <input
//             type="number"
//             id="max-price"
//             name="max-price"
//             placeholder="100000"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//           />
//           {/* <button onClick={onApply}>Apply</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhoneCategories;

