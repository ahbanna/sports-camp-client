import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "./Banner.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="banner-area" data-aos="flip-up">
      <Slider {...settings}>
        <div className="banner-one banner-bg" data-aos="flip-up">
          <div className="banner-content container">
            <h2 data-aos="fade-down" data-aos-duration="1500">
              Step onto the Field of <span>Football</span>
            </h2>
            <p data-aos="flip-left" data-aos-duration="2000">
              Stay active and have a blast with our sports camp program. Create
              unforgettable moments while developing your love for sports.
            </p>
            <div
              className="custom-btn"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2500"
            >
              <button>
                <Link to="/classes">JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="banner-two banner-bg" data-aos="zoom-in-up">
          <div className="banner-content container">
            <h2>
              <span>Tennis</span> Thrills Await for you
            </h2>
            <p>
              Experience the thrill of tennis mastery. We offer a dynamic blend
              of skill enhancement, friendly matches, and a vibrant tennis
              community to share the journey with.
            </p>
            <div className="custom-btn">
              <button>
                <Link to="/classes">JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="banner-three banner-bg" data-aos="zoom-in-up">
          <div className="banner-content container">
            <h2>
              Conquer the Slopes in <span>Skiing</span>
            </h2>
            <p>
              Hit the snowy slopes and conquer the mountains with our skiing
              program at our sports camp. Whether you're a seasoned skier or a
              first-timer, we have the slopes for you. Create lasting memories
              and develop a passion for the exhilarating world of skiing.
            </p>
            <div className="custom-btn">
              <button>
                <Link to="/classes">JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="banner-four banner-bg" data-aos="zoom-in-up">
          <div className="banner-content container">
            <h2>
              Dive into the World of <span>Basketball</span>
            </h2>
            <p>
              Get ready to shoot some hoops and improve your basketball skills
              at our sports camp program. Whether you're a seasoned player or a
              beginner, join us for an incredible time on the court. Make
              memories and nurture your passion for the game.
            </p>
            <div className="custom-btn">
              <button>
                <Link to="/classes">JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="banner-five banner-bg" data-aos="zoom-in-up">
          <div className="banner-content container">
            <h2>
              Embark on a <span>Cycling</span> Adventure
            </h2>
            <p>
              Pedal your way to fun and excitement with our sports camp's
              cycling program. Explore scenic routes, learn cycling techniques,
              and experience the thrill of the open road. Join us for an
              unforgettable journey that will ignite your love for cycling.
            </p>
            <div className="custom-btn">
              <button>
                <Link to="/classes">JOIN WITH US</Link>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
