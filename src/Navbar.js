// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
     
    
    <nav className="header">
    
    <h3 className='tit'>MY FIRST FSD CRUD APP</h3>
         <ul className="main-nav">
         
        <li >
       
          <Link to="/">Home</Link>
        </li>
         <li >
          <Link to="/createbook">AddBooks</Link>
        </li> 
        {/* <li>
          <Link to="/tablebook">TableBook</Link>
        </li>  */}
      </ul>
    </nav>
    </div>
  );
};






export default Navbar;
