import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useUser } from "../components/UserContext"; // adjust path as needed

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setUser } = useUser();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3002/verify", {
          withCredentials: true,
        });

        if (res.data.success) {
          setIsAuthenticated(true);
          setUser(res.data.user); // save user object to global state
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [setUser]);

  if (loading) return <h2>Loading...</h2>;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
