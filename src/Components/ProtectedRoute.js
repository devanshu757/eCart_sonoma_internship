import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import ErrorPage from "../Container/ErrorPage";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [showError, setShowError] = useState(true);

  if (!isLoggedIn) {
    return (
      <ErrorPage
        show={showError}
        onClose={() => setShowError(false)}
        message="You must log in to view this page."
      />
    );
  }

  return children;
};

export default ProtectedRoute;
