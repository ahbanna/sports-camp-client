import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import { Gallery } from "../Gallery/Gallery";
import Join from "../Join/Join";
import Principles from "../Principles/Principles";
import Social from "../Social/Social";
import Faq from "../Faq/Faq";
import Partners from "../Partners/Partners";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <PopularInstructors></PopularInstructors>
      <PopularClasses></PopularClasses>
      <Gallery></Gallery>
      <Principles></Principles>
      <Social></Social>
      <Faq></Faq>
      <Join></Join>
      <AboutUs></AboutUs>
      <Partners></Partners>
    </div>
  );
};

export default Home;
