import React, { useEffect, useState } from "react";
import scrollToTopIcon from "../../../src/assets/icons/football.png";
import scrollToTopIcon2 from "../../../src/assets/icons/football2.png";
import scrollToTopIcon3 from "../../../src/assets/icons/football3.png";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const topOffset = window.pageYOffset || document.documentElement.scrollTop;

    // Set visibility based on the scroll position (e.g., show the button when scrolling down 200 pixels)
    setIsVisible(topOffset > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling animation
    });
  };

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scrollIcon">
      {isVisible && <img src={scrollToTopIcon3} alt="" onClick={scrollToTop} />}
    </div>
  );
};

export default ScrollToTop;
