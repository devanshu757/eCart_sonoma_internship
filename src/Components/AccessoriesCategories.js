import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMaxPrice, setMinPrice, setSelectedFilters } from "../features/counter/filterSlice";
import "./Categories.css";
// import DiscreteSlider from "./Slider";


const AccessoriesCategories = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.filter.selectedFilters);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const maxPrice = useSelector((state) => state.filter.maxPrice);
  const categories = ["Power Bank", "Smartwatch", "Earbuds", "Screen Guard", "MicroSD Card", "Bluetooth Headsets","Wall Charger","Smart Scale"];

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

export default AccessoriesCategories;













  // const handleCategoryChange = (category) => {
  //   let updatedFilters;
  //   if (selectedFilters.includes(category)) {
  //     updatedFilters = selectedFilters.filter((item) => item !== category);
  //   } else {
  //     updatedFilters = [...selectedFilters, category];
  //   }
  //   setSelectedFilters(updatedFilters);
  // };




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









// import React from 'react';
// import './Categories.css'; 

// const AccessoriesCategories = () => {
//   return (
//     <>
//       <div className='categories'>
//         <h2>Categories of Accessories Company Filter</h2>
//         <div className="checkbox-group">
//           <label htmlFor="phonecase">
//             <input type="checkbox" id="phonecase" name="phonecase" /> Phonecase 
//           </label>
//           <label htmlFor="screenguard">
//             <input type="checkbox" id="screenguard" name="screenguard" /> Screenguard
//           </label>
//           <label htmlFor="powerbank">
//             <input type="checkbox" id="powerbank" name="powerbank" /> Powerbank
//           </label>
//           <label htmlFor="airdopes">
//             <input type="checkbox" id="airdopes" name="airdopes" /> Airdopes
//           </label>
//           <label htmlFor="charger">
//             <input type="checkbox" id="charger" name="charger" /> Charger
//           </label>
//           <label htmlFor="weighing-scale">
//             <input type="checkbox" id="weighing-scale" name="weighing-scale" /> Weighing Scale
//           </label>
//         </div>
//       </div>

//       <div className='price-range'>
//         <h2>Price Range</h2>
//         <div className="price-inputs">
//           <label htmlFor="min-price">Min Price:</label>
//           <input type="number" id="min-price" name="min-price" placeholder="0" />
//           <label htmlFor="max-price">Max Price:</label>
//           <input type="number" id="max-price" name="max-price" placeholder="100000" />
//         </div>
//         <button className="btn" type="submit">Apply</button>
//       </div>
//     </>
//   );
// }

// export default AccessoriesCategories;
