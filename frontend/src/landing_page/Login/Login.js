import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left", autoClose: 3000 });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right", autoClose: 2000 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        inputValue,
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/dashboard/*`;
        }, 2000);
      } else {
        handleError(message);
      }
    } catch (error) {
      const backendMsg = error?.response?.data?.message;
      console.error("Login failed:", backendMsg || error.message);
      handleError(backendMsg || "Something went wrong. Please try again.");
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

        <div className="login-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="login-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="login-redirect">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
