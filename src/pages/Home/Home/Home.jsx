import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <PopularInstructors></PopularInstructors>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
