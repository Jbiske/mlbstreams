import React,  { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './nav.css';


const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
   
      </ul>
    </nav>
  );
};

export default Nav;