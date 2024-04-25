import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import the CloseIcon
import { Link } from "react-router-dom";
import { logout } from "../redux/authSlice";
import logo from "../assets/logow.png";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const greeting = user ? `Welcome, ${user}!` : "Welcome!";

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} className="logo" alt="" />
        <div
          className={`menu-icon ${showNavbar ? "active" : ""}`}
          onClick={handleShowNavbar}
        >
          {showNavbar ? <CloseIcon /> : <MenuIcon />} {/* Toggle between MenuIcon and CloseIcon */}
        </div>
        <div className={`nav-elements ${showNavbar ? "active" : "inactive"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/faq">Faqs</Link>
            </li>
            {isLoggedIn || user ? (
              <>
                <li>
                  <span>{greeting}</span>
                </li>
                <li>
                  <button onClick={handleLogout}>Log out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Log in</Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button>Sign up</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
