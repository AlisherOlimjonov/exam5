import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link to="/" className="fs-3 navbar-brand">
           Rick and Morty
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <NavLink activeClassName="active" to="/" className="nav-link ">
                Character
              </NavLink>

              <NavLink to="/episodes" className="nav-link">
                Episode
              </NavLink>

              <NavLink to="/location" className="nav-link">
                Location
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
