import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import "./Styles/Menu.css"; // CSS file

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { user, setUser } = useUser();

  const handleMenuClick = (index) => setSelectedMenu(index);

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

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/investaFlow.png" alt="Logo" className="logo" />

      <div className="menu-wrapper">
        <ul className="menu-list">
          {[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Orders", path: "/dashboard/Orders" },
            { label: "Holdings", path: "/dashboard/holdings" },
            { label: "Positions", path: "/dashboard/positions" },
            { label: "Funds", path: "/dashboard/funds" },
          ].map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={() => handleMenuClick(index)}>
                <p
                  className={
                    selectedMenu === index ? activeMenuClass : menuClass
                  }
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="divider" />

        <div className="profile">
          <div className="user-info">
            <div className="avatar">
              {user?.username?.substring(0, 2).toUpperCase() || "UN"}
            </div>
            <p className="username-text">
              <b>{user?.username || "Loading..."}</b>
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="btn btn-sm btn-outline-danger logout-button"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
