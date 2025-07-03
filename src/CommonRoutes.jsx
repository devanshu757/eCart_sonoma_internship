import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Container/HomePage";
import AboutPage from "./Container/AboutPage";
import ContactPage from "./Container/ContactPage";
import PrivacyPage from "./Container/PrivacyPage";
import TermsOfServicePage from "./Container/TermsOfServicePage";
import Login from "./Container/Login";
import MobileProductCard from "./Components/MobileProductCard";
import LaptopproductCard from "./Components/LaptopproductCard";
import AccessoriesProductCard from "./Components/AccessoriesProductCard";
import ErrorPage from "./Container/ErrorPage";

const CommonRoutes = [
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="about" path="/about" element={<AboutPage />} />,
  <Route key="contact" path="/contact" element={<ContactPage />} />,
  <Route key="privacy" path="/privacy" element={<PrivacyPage />} />,
  <Route key="terms" path="/terms" element={<TermsOfServicePage />} />,
  <Route key="login" path="/login" element={<Login />} />,
  <Route key="mobile-list" path="/mobileProducts" element={<MobileProductCard />} />,
  <Route key="laptop-list" path="/laptopProducts" element={<LaptopproductCard />} />,
  <Route key="accessories-list" path="/accessoriesProducts" element={<AccessoriesProductCard />} />,
  <Route key="error" path="*" element={<ErrorPage />} />,
];

export default CommonRoutes;
