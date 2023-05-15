// MenuComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuComponent.css';

const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <i className="fa fa-bars menu-icon" onClick={toggleMenu}></i>
      <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
        <li className="menu-item">
          <Link to="/Login">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/Profile">Profile</Link>
        </li>
        <li className="menu-item">
          <Link to="/DoList">DoList</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuComponent;