import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./Banner.css";
import MyButton from "../../../components/MyButton";
import bannerBotton from "../../../assets/banner/white_bottom_wave_01.png";

const Banner = () => {
  return (
    <div className="banner-area">
      {/* <Carousel>
        <div>
          <img src={banner1} />
          <p className="legend">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non ut
            omnis repellat officia maiores illo at nam esse aliquam laboriosam,
            placeat quas, exercitationem inventore eaque cupiditate perspiciatis
            natus cumque!
          </p>
        </div>
        <div>
          <img src={banner2} />
          <p className="legend">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            consectetur quia ratione eos eum beatae quisquam dolore iste
            consequuntur! Facere reiciendis soluta et eaque illo quasi
            perspiciatis eius, deleniti deserunt!
          </p>
        </div>
      </Carousel> */}

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="banner-img">
            <img src={banner4} alt="" />
          </div>
          <div className="banner-content">
            <h3 className="heading-title">Welcome</h3>
            <h2>
              Join the Ultimate <br /> <span>Sports Adventure!</span>
            </h2>
            <p>
              Get active, stay fit, and have a blast with our sports camp
              program.
            </p>
            {/* <MyButton
              btnLink={"https://www.google.com/"}
              btnText={"Hello"}
            ></MyButton> */}
          </div>
          <div className="banner-bottom-bg">
            <img src={bannerBotton} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#fff3f3" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-content">
                  <h3 className="heading-title">Welcome</h3>
                  <h2>
                    Join the Ultimate <br /> <span>Sports Adventure!</span>
                  </h2>
                  <p>
                    Get active, stay fit, and have a blast with our sports camp
                    program.
                  </p>
                  {/* <MyButton
              btnLink={"https://www.google.com/"}
              btnText={"Hello"}
            ></MyButton> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-img">
                  <img src={banner2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
