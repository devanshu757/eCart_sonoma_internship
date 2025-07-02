import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

const Footer = () => {

    const [year, setYear] = useState(new Date().getFullYear());

    useEffect( () => {
        const interval = setInterval(() => {
            setYear(new Date().getFullYear());
        }, 1000);
        console.log("Footer");
        return () => clearInterval(interval);
    },[]);

    return (
       <>
        <footer className="footer">
            <p>&copy; {year} All Rights Reserved</p>
            <nav className="nav">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact </Link>
                <Link to="/about">About </Link>
            </nav>
        </footer>
       </>
    );
    }

export default Footer;
