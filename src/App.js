import "./App.css";
import React from "react";
import { HashRouter, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import { useAuth } from "./Components/AuthContext";

// Route arrays
import CommonRoutes from "./CommonRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  // const { isLoggedIn } = useAuth();

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          {CommonRoutes}
          {ProtectedRoutes}
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
