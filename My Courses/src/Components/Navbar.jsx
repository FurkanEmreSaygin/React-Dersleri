import React, { Component } from "react";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <p className="logo">TaskFlow</p>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
