import { createSlice } from "@reduxjs/toolkit";
import mobiles  from "../../data/mobiles";

const initialState = {
  selectedFilters: [],
  minPrice: "",
  maxPrice: "",
  filteredData: [{mobiles}],
};

// export const filterSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {

    

//     minPrice: (state, action) => {
//       state.minPrice = action.payload;
//     },

//     maxprice: (state, action) => {
//       state.maxPrice = action.payload;
//     },
    
//     selectedFilters: (state,action) => {
//       state.selectedFilters = action.payload;
//     },

//     // filteredData: (state, action) => {
//     //   const { selectedFilters, minPrice, maxPrice } = state;
//     //   let result = mobiles;

    
//     //   if (selectedFilters.length > 0) {
//     //     result = result.filter((mobile) =>
//     //       selectedFilters.includes(mobile.category)
//     //     );
//     //   }

//     //   if (minPrice !== "" && maxPrice !== "") {
//     //     const min = parseInt(minPrice, 10);
//     //     const max = parseInt(maxPrice, 10);

//     //     result = result.filter((mobile) => {
//     //       return mobile.price >= min && mobile.price <= max;
//     //     });
//     //   }
//     //   state.filteredData = result;
//     //   state.push({
//     //     type: "filter/setFilteredData",
//     //     payload: result,
//     //   });
//     // },
//     // resetFilters: (state) => {
//     //   state.selectedFilters = [];
//     //   state.minPrice = "";
//     //   state.maxPrice = "";
//     //   state.filteredData = [{mobiles}];
//     // }
//   },
// });

// export  const {maxPrice, minPrice , selectedFilters} = filterSlice.actions;

// export default filterSlice.reducer;




// rename action creators to avoid confusion
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSelectedFilters: (state, action) => {
      state.selectedFilters = action.payload;
    },
  },
});

export const { setMinPrice, setMaxPrice, setSelectedFilters } = filterSlice.actions;
export default filterSlice.reducer;
