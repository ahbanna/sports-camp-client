import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";
import banner6 from "../../../assets/banner/banner6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./Banner.css";
import MyButton from "../../../components/MyButton";
import bannerBotton from "../../../assets/banner/white_bottom_wave_01.png";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="banner-area">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="banner-img">
            <img src={banner5} alt="" />
          </div>
          <div className="banner-content">
            <Slide triggerOnce>
              <h3 className="main-heading">Welcome</h3>
            </Slide>

            <h2>IN LOVE WITH SPORTS!</h2>
            <p>
              Get active, stay fit, and have a blast with our sports camp
              program.
            </p>
            <div className="custom-btn">
              <button>
                <Link>JOIN WITH US</Link>
              </button>
            </div>
          </div>
          <div className="banner-bottom-bg">
            <img src={bannerBotton} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-img">
            <img src={banner4} alt="" />
          </div>
          <div className="banner-content">
            <Slide triggerOnce>
              <h3 className="main-heading">Welcome</h3>
            </Slide>
            <h2>BELIEVE & ACHIEVE</h2>
            <p>Improve skills, make friends, and create lasting memories.</p>
            <div className="custom-btn">
              <button>
                <Link>JOIN WITH US</Link>
              </button>
            </div>
          </div>
          <div className="banner-bottom-bg">
            <img src={bannerBotton} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-img">
            <img src={banner6} alt="" />
          </div>
          <div className="banner-content">
            <Slide triggerOnce>
              <h3 className="main-heading">Welcome</h3>
            </Slide>
            <h2>ELEVATE YOUR GAME</h2>
            <p>"Discover the Thrill of Sports With Us</p>
            <div className="custom-btn">
              <button>
                <Link>JOIN WITH US</Link>
              </button>
            </div>
          </div>
          <div className="banner-bottom-bg">
            <img src={bannerBotton} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
