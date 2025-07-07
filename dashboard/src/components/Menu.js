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
      {/* Left: Logo */}
      <img src="/investaFlow.png" alt="Logo" style={{ width: "120px" }} />

      {/* Center: Menus + User + Logout */}
      <div className="d-flex align-items-center gap-4">
        {[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Orders", path: "/dashboard/Orders" },
          { label: "Holdings", path: "/dashboard/holdings" },
          { label: "Positions", path: "/dashboard/positions" },
          { label: "Funds", path: "/dashboard/funds" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => handleMenuClick(index)}
            className="text-decoration-none"
          >
            <p className={selectedMenu === index ? activeMenuClass : menuClass}>
              {item.label}
            </p>
          </Link>
        ))}

        {/* Divider */}
        <div style={{ width: "1px", height: "24px", background: "#000" }} />

        {/* Username and Logout inline with menu style */}
        <p className="menu fw-bold mb-0">{user?.username || "Loading..."}</p>

        <span
          onClick={handleLogout}
          style={{
            fontSize: "0.8rem",
            fontWeight: "400",
            color: "rgb(70, 70, 70)",
            border: "1px solid black",
            padding: "4px 10px",
            borderRadius: "2px",
            cursor: "pointer",
            marginLeft: "8px",
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleLogout();
          }}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default Menu;
