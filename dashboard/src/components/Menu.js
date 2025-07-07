import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import "./Styles/Menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { user, setUser } = useUser();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

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
    <div className="menu-container d-flex align-items-center justify-content-between px-4 py-2">
      {/* Logo on the left */}
      <img src="/investaFlow.png" alt="Logo" style={{ width: "120px" }} />

      {/* Centered menu, username, and logout */}
      <div className="d-flex align-items-center gap-4">
        <Link
          to="/dashboard"
          onClick={() => handleMenuClick(0)}
          className="text-decoration-none"
        >
          <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
            Dashboard
          </p>
        </Link>
        <Link
          to="/dashboard/Orders"
          onClick={() => handleMenuClick(1)}
          className="text-decoration-none"
        >
          <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
            Orders
          </p>
        </Link>
        <Link
          to="/dashboard/holdings"
          onClick={() => handleMenuClick(2)}
          className="text-decoration-none"
        >
          <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
            Holdings
          </p>
        </Link>
        <Link
          to="/dashboard/positions"
          onClick={() => handleMenuClick(3)}
          className="text-decoration-none"
        >
          <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
            Positions
          </p>
        </Link>
        <Link
          to="/dashboard/funds"
          onClick={() => handleMenuClick(4)}
          className="text-decoration-none"
        >
          <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
            Funds
          </p>
        </Link>

        {/* Divider */}
        <div style={{ width: "1px", height: "24px", background: "#ddd" }} />

        {/* Username and Logout inline */}
        <span className="menu mb-0">{user?.username || "Loading..."}</span>
        <button
          onClick={handleLogout}
          className="menu btn btn-sm bg-transparent border-0 p-0"
          style={{
            fontSize: "0.8rem",
            color: "inherit",
            marginLeft: "4px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
