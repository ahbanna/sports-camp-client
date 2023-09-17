import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import { Gallery } from "../Gallery/Gallery";
import Join from "../Join/Join";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <PopularInstructors></PopularInstructors>
      <PopularClasses></PopularClasses>
      <Gallery></Gallery>
      <Join></Join>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
