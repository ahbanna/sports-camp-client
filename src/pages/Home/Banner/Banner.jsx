// import React, { useRef, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import football from "../../../assets/banner/football.jpg";
// import Skateboard from "../../../assets/banner/Skateboard.jpg";
// import tennis from "../../../assets/banner/tennis.jpg";
// import swimming from "../../../assets/banner/swimming.jpg";
// import cricket from "../../../assets/banner/cricket.jpeg";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { Pagination } from "swiper";
// import "swiper/css";
// // import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation } from "swiper";
// import "./Banner.css";
// import MyButton from "../../../components/MyButton";
// import bannerBotton from "../../../assets/banner/white_bottom_wave_01.png";
// import { Link } from "react-router-dom";
// import { Fade, Slide } from "react-awesome-reveal";

// const Banner = () => {
//   return (
//     <div className="banner-area">
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>
//           <div className="banner-img">
//             <img src={football} alt="" />
//           </div>
//           <div className="banner-content">
//             <Slide triggerOnce>
//               <h3 className="main-heading">Welcome</h3>
//             </Slide>
//             <h2>Step onto the Field of Football </h2>
//             <p>
//               Stay active and have a blast with our sports camp program. Create
//               unforgettable moments while developing your love for sports.
//             </p>
//             <div className="custom-btn">
//               <button>
//                 <Link>JOIN WITH US</Link>
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="banner-img">
//             <img src={tennis} alt="" />
//           </div>
//           <div className="banner-content">
//             <Slide triggerOnce>
//               <h3 className="main-heading">Welcome</h3>
//             </Slide>
//             <h2>Tennis Thrills Await for you</h2>
//             <p>
//               Experience the thrill of tennis mastery. We offer a dynamic blend
//               of skill enhancement, friendly matches, and a vibrant tennis
//               community to share the journey with.
//             </p>
//             <div className="custom-btn">
//               <button>
//                 <Link>JOIN WITH US</Link>
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="banner-img">
//             <img src={Skateboard} alt="" />
//           </div>
//           <div className="banner-content">
//             <Slide triggerOnce>
//               <h3 className="main-heading">Welcome</h3>
//             </Slide>
//             <h2>SKATEBOARDING EVERYDAY</h2>
//             <p>
//               We aim to showcase the incredible skill and talent of
//               skateboarders from all, and bring attention to the sport of
//               skateboarding in our country
//             </p>
//             <div className="custom-btn">
//               <button>
//                 <Link>JOIN WITH US</Link>
//               </button>
//             </div>
//           </div>
//           {/* <div className="banner-bottom-bg">
//             <img src={bannerBotton} alt="" />
//           </div> */}
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="banner-img">
//             <img src={swimming} alt="" />
//           </div>
//           <div className="banner-content">
//             <Slide triggerOnce>
//               <h3 className="main-heading">Welcome</h3>
//             </Slide>
//             <h2>We Make You A Next Level Swimmer</h2>
//             <p>
//               Experience the thrill of swimming with us. Expert coaching, skill
//               enhancement, and a community of water enthusiasts await you by the
//               pool.
//             </p>
//             <div className="custom-btn">
//               <button>
//                 <Link>JOIN WITH US</Link>
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="banner-img">
//             <img src={cricket} alt="" />
//           </div>
//           <div className="banner-content">
//             <Slide triggerOnce>
//               <h3 className="main-heading">Welcome</h3>
//             </Slide>
//             <h2>Elevate your cricketing journey with us</h2>
//             <p>
//               For the love of cricket! Unleash your potential with personalized
//               coaching, exciting games, and a summer filled with cricketing joy.
//             </p>
//             <div className="custom-btn">
//               <button>
//                 <Link>JOIN WITH US</Link>
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;

import React, { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import football from "../../../assets/banner/football.jpg";
import Skateboard from "../../../assets/banner/Skateboard.jpg";
import Skateboard2 from "../../../assets/banner/Skateboard2.jpg";
import Skateboard3 from "../../../assets/banner/Skateboard3.jpg";
import tennis from "../../../assets/banner/tennis.jpg";
import tennis2 from "../../../assets/banner/tennis2.jpg";
import swimming from "../../../assets/banner/swimming.jpg";
import cricket from "../../../assets/banner/cricket.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Banner.css";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import "aos/dist/aos.css"; // Import the CSS for animations
import AOS from "aos"; // Import the AOS library

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  useEffect(() => {
    AOS.init({
      // Global settings go here
    });
  }, []);
  return (
    <div className="banner-area">
      <Swiper
        spaceBetween={70}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-img">
            <img src={football} alt="" />
          </div>
          <div className="banner-content">
            <Slide triggerOnce>
              <h3 className="main-heading">Welcome</h3>
            </Slide>
            <h2>Step onto the Field of Football </h2>
            <p>
              Stay active and have a blast with our sports camp program. Create
              unforgettable moments while developing your love for sports.
            </p>
            <div className="custom-btn">
              <button>
                <Link>JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-img">
            <img src={tennis2} alt="" />
          </div>
          <div className="banner-content">
            <Slide triggerOnce>
              <h3 className="main-heading">Welcome</h3>
            </Slide>
            <h2 data-aos="zoom-in" data-aos-duration="6500">
              Tennis Thrills Await for you
            </h2>
            <p>
              Experience the thrill of tennis mastery. We offer a dynamic blend
              of skill enhancement, friendly matches, and a vibrant tennis
              community to share the journey with.
            </p>
            <div className="custom-btn">
              <button>
                <Link>JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-img">
            <img src={Skateboard3} alt="" />
          </div>
          <div className="banner-content">
            <Slide triggerOnce>
              <h3 className="main-heading">Welcome</h3>
            </Slide>
            <h2>SKATEBOARDING EVERYDAY</h2>
            <p>
              We aim to showcase the incredible skill and talent of
              skateboarders from all, and bring attention to the sport of
              skateboarding in our country
            </p>
            <div className="custom-btn">
              <button>
                <Link>JOIN WITH US</Link>
              </button>
            </div>
          </div>
          {/* <div className="banner-bottom-bg">
            <img src={bannerBotton} alt="" />
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-img">
            <img src={swimming} alt="" />
          </div>
          <div className="banner-content">
            <Slide triggerOnce>
              <h3 className="main-heading">Welcome</h3>
            </Slide>
            <h2>We Make You A Next Level Swimmer</h2>
            <p>
              Experience the thrill of swimming with us. Expert coaching, skill
              enhancement, and a community of water enthusiasts await you by the
              pool.
            </p>
            <div className="custom-btn">
              <button>
                <Link>JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-img">
            <img src={cricket} alt="" />
          </div>
          <div className="banner-content">
            <Slide triggerOnce>
              <h3 className="main-heading">Welcome</h3>
            </Slide>
            <h2>Elevate your cricketing journey with us</h2>
            <p>
              For the love of cricket! Unleash your potential with personalized
              coaching, exciting games, and a summer filled with cricketing joy.
            </p>
            <div className="custom-btn">
              <button>
                <Link>JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
