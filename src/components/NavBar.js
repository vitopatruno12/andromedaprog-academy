import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./animations.css"; // ← importante

export default function Navbar({ darkMode, toggleDark }) {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } shadow-sm`}
    >
      <div className="container">
        {/* LOGO */}
        <Link to="/" className="navbar-brand fw-bold neon-brand">
          AndromedaProg Academy
        </Link>

        {/* BURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item fw-bold ">
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
            </li>

            <li className="nav-item fw-bold ">
              <Link to="/corsi" className={isActive("/corsi")}>
                Corsi
              </Link>
            </li>

            <li className="nav-item fw-bold ">
              <Link to="/faq" className={isActive("/faq")}>
                FAQ
              </Link>
            </li>
          </ul>

          {/* DARK MODE */}
          <button
            className="btn btn-outline-primary ms-3"
            onClick={toggleDark}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
