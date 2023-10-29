import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Redux-Toolkit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/cart`} className="nav-link" href="#">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  Cart Items : {items.length}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
