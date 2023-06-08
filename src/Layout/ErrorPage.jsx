import React from "react";
import { Outlet } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default ErrorPage;
