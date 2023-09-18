import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div className="relative">
      <ScrollToTop></ScrollToTop>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
