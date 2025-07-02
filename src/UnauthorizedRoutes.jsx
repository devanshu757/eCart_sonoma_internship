import React from "react";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./Container/HomePage";
import MobileProductCard from "./Components/MobileProductCard";
import AboutPage from "./Container/AboutPage";
import LaptopproductCard from "./Components/LaptopproductCard";
import PrivacyPage from "./Container/PrivacyPage";
import TermsOfServicePage from "./Container/TermsOfServicePage";
import ContactPage from "./Container/ContactPage";
import Login from "./Container/Login";
import AccessoriesProductCard from "./Components/AccessoriesProductCard";
import ErrorPage from "./Container/ErrorPage";

const UnauthorizedRoutes = () => {
  return (
  
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mobileProducts" element={<MobileProductCard />}></Route>
        <Route path="/laptopProducts" element={<LaptopproductCard />} />
        <Route
          path="/accessoriesproducts"
          element={<AccessoriesProductCard />}
        ></Route>
        <Route path="/privacy" element={<PrivacyPage />}></Route>
        <Route path="/terms" element={<TermsOfServicePage />}></Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default UnauthorizedRoutes;
