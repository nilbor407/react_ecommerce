import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() 
{
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        {/* Brand Logo with optional image */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span className="fw-bold fs-4">DairyDelight</span>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {[
              { name: "Home", path: "/", active: true },
              { name: "Products", path: "/products" },
              { name: "Categories", path: "#" },
              { name: "About Us", path: "#" },
              { name: "Contact", path: "#" },
            ].map((item, index) => (
              <li className="nav-item mx-1" key={index}>
                <a 
                  className={`nav-link px-3 py-2 rounded ${item.active ? "active fw-semibold" : ""}`}
                  href={item.path}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.name}
                  {item.active && <span className="visually-hidden">(current)</span>}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-side Icons */}
          <div className="d-flex align-items-center">
            <div className={  localStorage.getItem('user_token')==undefined ? "d-block":"d-none"  }>
              <Link to={"/login"} className="text-white me-3 position-relative">
                  Login
              </Link>
              <Link to={"/create_account"} className="text-white me-3 position-relative">
                  Sign Up
              </Link>
            </div>
            <div className={  localStorage.getItem('user_token')==undefined ? "d-none":"d-block"  }>
              <Link to={"/cart"} className="text-white me-3 position-relative">
                  Cart
              </Link>
              <Link to={"/profile"} className="text-white me-3 position-relative">
                  Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;