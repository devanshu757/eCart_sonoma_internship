import React from "react";
import { Routes, Route } from "react-router-dom";
import AccessoriesMoreInfo from "./Container/AccessoriesMoreInfo";
import LaptopMoreInfo from "./Container/LaptopMoreInfo";
import CartPage from "./Components/CartPage";
import MobileMoreInfo from "./Container/MobileMoreInfo";
import ErrorPage from "./Container/ErrorPage";
import HomePage from "./Container/HomePage";
import MobileProductCard from "./Components/MobileProductCard";
import LaptopproductCard from "./Components/LaptopproductCard";
import AccessoriesProductCard from "./Components/AccessoriesProductCard";
import ContactPage from "./Container/ContactPage";
// import CheckoutPage from "./Container/CheckoutPage";
// import CheckoutForm from "./Container/CheckoutForm";

const AuthorizedRoutes = () => {
  return (
  
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mobileProducts" element={<MobileProductCard />}></Route>
                <Route path="/laptopProducts" element={<LaptopproductCard />} />
                <Route
                  path="/accessoriesproducts"
                  element={<AccessoriesProductCard />}
                ></Route>
        <Route path="/mobileProducts/:id" element={<MobileMoreInfo />}></Route>
        <Route path="/laptopProducts/:id" element={<LaptopMoreInfo />}></Route>       
        <Route
          path="/accessoriesProducts/:id"
          element={<AccessoriesMoreInfo />}
        ></Route>
        <Route path="/cart" element={<CartPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="/checkout" element={<CheckoutForm />} /> */}
{/* <Route path="/return" element={<Return />} /> */}

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
   </>

  );
};

export default AuthorizedRoutes;
