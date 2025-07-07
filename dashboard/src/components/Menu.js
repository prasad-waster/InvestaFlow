import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import "./Styles/Menu.css";

const Menu = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null);
      toast.success("Logged out successfully", {
        position: "bottom-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        window.location.href = "https://investa-flow-home.vercel.app/login";
      }, 2000);
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Logout failed. Please try again.", {
        position: "bottom-left",
        autoClose: 3000,
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <Link className="navbar-brand d-flex align-items-center" to="/dashboard">
        <img
          src="/investaFlow.png"
          alt="Logo"
          style={{ width: "40px", marginRight: "10px" }}
        />
        <span className="fw-bold text-black">InvestaFlow</span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link text-black" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/dashboard/Orders">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/dashboard/holdings">
              Holdings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/dashboard/positions">
              Positions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/dashboard/funds">
              Funds
            </Link>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-2 profile-area mt-2 mt-lg-0">
          <div className="avatar-initials">
            {user?.username?.substring(0, 2).toUpperCase() || "UN"}
          </div>
          <span className="username-text">
            {user?.username || "Loading..."}
          </span>
          <button className="logout-btn ms-2" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-1"></i> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
