import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default PrivateRoute;
