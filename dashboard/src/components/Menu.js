import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import "./Styles/Menu.css";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null); // clear context/state
      toast.success("Logged out successfully", {
        position: "bottom-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Logout failed. Please try again.", {
        position: "bottom-left",
        autoClose: 3000,
      });
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/investaFlow.png" alt="Logo" style={{ width: "120px" }} />

      <div className="menus" style={{ marginTop: "25px" }}>
        <ul>
          <li>
            <Link
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/Orders"
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          style={{ marginBottom: "20px", padding: "10px" }}
        >
          <div className="avatar">
            {user?.username?.substring(0, 2).toUpperCase() || "UN"}
          </div>
          <p style={{ fontSize: "15px" }} className="username">
            <b>{user?.username || "Loading..."}</b>
          </p>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
