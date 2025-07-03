import React from "react";
import { Route } from "react-router-dom";
import MobileMoreInfo from "./Container/MobileMoreInfo";
import LaptopMoreInfo from "./Container/LaptopMoreInfo";
import AccessoriesMoreInfo from "./Container/AccessoriesMoreInfo";
import CartPage from "./Components/CartPage";
import ProtectedRoute from "./Components/ProtectedRoute";

const ProtectedRoutes = [
  <Route
    key="mobile-info"
    path="/mobileProducts/:id"
    element={
      <ProtectedRoute>
        <MobileMoreInfo />
      </ProtectedRoute>
    }
  />,
  <Route
    key="laptop-info"
    path="/laptopProducts/:id"
    element={
      <ProtectedRoute>
        <LaptopMoreInfo />
      </ProtectedRoute>
    }
  />,
  <Route
    key="accessories-info"
    path="/accessoriesProducts/:id"
    element={
      <ProtectedRoute>
        <AccessoriesMoreInfo />
      </ProtectedRoute>
    }
  />,
  <Route
    key="cart"
    path="/cart"
    element={
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    }
  />,
];

export default ProtectedRoutes;
