import React from "react";
import "./Join.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/join/1.jpg";
import img2 from "../../../assets/join/2.jpg";
import img3 from "../../../assets/join/3.jpg";
import img4 from "../../../assets/join/4.jpg";
import img5 from "../../../assets/join/5.jpg";
import img6 from "../../../assets/join/6.jpg";
import { Link } from "react-router-dom";

const Join = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 300,
    autoplay: true,
  };

  return (
    <div className="join-area">
      <div className="join-area-content container">
        <div className="join-area-text" data-aos="fade-right">
          <div className="area-title">
            <h5>Join Today</h5>
            <h2>
              Sports camp invites you to <span>classes</span>
            </h2>
          </div>
          <p>
            Welcome to Sports camp, where passion meets purpose, and dedication
            leads to success. If you're a sports enthusiast seeking to take your
            skills to the next level, you're in the right place. Join our
            community of athletes, coaches, and trainers, and embark on a
            transformative journey towards greatness.
          </p>
          <div className="custom-btn">
            <button>
              <Link>JOIN WITH US</Link>
            </button>
          </div>
        </div>
        <div className="join-area-slider" data-aos="flip-right">
          <Slider {...settings}>
            <div>
              <img src={img1} alt="" srcset="" />
            </div>
            <div>
              <img src={img2} alt="" srcset="" />
            </div>
            <div>
              <img src={img3} alt="" srcset="" />
            </div>
            <div>
              <img src={img4} alt="" srcset="" />
            </div>
            <div>
              <img src={img5} alt="" srcset="" />
            </div>
            <div>
              <img src={img6} alt="" srcset="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Join;
