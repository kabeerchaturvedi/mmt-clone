import React from "react";
import { Link } from "react-router-dom";

const mystyle = {
  width: "113px",
  height: "36px",
  paddingLeft: "15px",
};

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand">
          <img src="/assets/mmtLogoWhite.png" style={mystyle} alt="Logo"/>
        </a>

        <div className="collapse navbar-collapse">
          {userInfo ? (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  🔔 Notification
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bookings" className="nav-link">
                  🏠 Buy Villa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/booking-details" className="nav-link">
                  🏠 Host Villa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/your-bookings" className="nav-link">
                  🎫 Bookings
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/bookings" className="nav-link">
                  🏠 Buy Villa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/booking-details" className="nav-link">
                  🏠 Host Villa
                </Link>
              </li>
            </ul>
          )}

          {userInfo ? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/logout" className="nav-link">
                  <i class="fas fa-sign-out-alt">Logout</i>
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link">Hi! {userInfo.username}</span>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  🔒 Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  <i class="fa fa-user-plus"></i>
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
