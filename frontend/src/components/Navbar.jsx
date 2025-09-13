import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const authenticated = localStorage.getItem("isAuthenticated");
    const userData = localStorage.getItem("user");

    if (authenticated && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");

    // Update state
    setIsLoggedIn(false);
    setUser(null);

    // Redirect to home page
    history.push("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          BenYadjisNow
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
            to="/community"
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
          {isLoggedIn ? (
            <div className="user-menu">
              <Link to="/profile" className="nav-link user-profile-link">
                {user?.avatar && (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="user-avatar"
                  />
                )}
                <span>{user?.name || "Profile"}</span>
              </Link>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link
                to="/login"
                className="btn-login"
                onClick={() => console.log("Login button clicked")}
              >
                Login
              </Link>
              <Link to="/register" className="btn-register">
                Sign Up
              </Link>
            </div>
          )}
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
