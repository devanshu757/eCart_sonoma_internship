import "./App.css";
import React from "react";
import UnauthorizedRoutes from "./UnauthorizedRoutes";
import AuthorizedRoutes from "./AuthorizedRoutes";
import { useAuth } from "./Components/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";



function App() {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
   
      <div className="App">
        <Header />
        <Routes>
          {isLoggedIn ? (
            <Route path="/*" element={<AuthorizedRoutes />} />
          ) : (
            <Route path="/*" element={<UnauthorizedRoutes />} />
          )}
        </Routes>
        <Footer />
      </div>
    
  </BrowserRouter>
  
  );
}

export default App;
