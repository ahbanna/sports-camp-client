import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
