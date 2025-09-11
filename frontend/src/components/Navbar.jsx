import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          TravelEase
          <i className="fas fa-globe-americas"></i>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/destinations"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link
            to="/restaurants"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Restaurants
          </Link>
          <Link
            to="/posts"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Community
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="nav-auth">
          <div className="auth-buttons">
            <Link to="/login" className="btn-login">
              Login
            </Link>
            <Link to="/register" className="btn-register">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
