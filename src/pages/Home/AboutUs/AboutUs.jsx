import React from "react";
import "./AboutUs.css";
import about1 from "../../../assets/about/about1.jpg";
import about2 from "../../../assets/about/about2.jpg";
import about3 from "../../../assets/about/about3.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="about-area-content">
          <div className="about-area-left">
            <div className="img1">
              <img src={about1} alt="" srcset="" />
            </div>
            <div className="img2">
              <img src={about2} alt="" srcset="" />
            </div>
            <div className="img3">
              <img src={about3} alt="" srcset="" />
            </div>
          </div>
          <div className="about-area-right">
            <div className="area-title">
              <p>About Us</p>
              <h2>
                From the moment you walk through the door you know
                <span> Sports Camp</span> is a unique place
              </h2>
            </div>
            <p>
              Welcome to our summer sports camp! We offer cricket, football,
              table tennis, baseball, tennis, badminton, boxing, and more. Led
              by experienced instructors, our camp provides fun-filled training
              to students of all skill levels. Join us for a memorable summer of
              sports, teamwork, and personal growth.
            </p>
            <p>
              Discover your athletic potential and make lasting friendships in a
              safe and supportive environment. Get ready for an exciting and
              enriching sports camp experience!
            </p>
            <div className="short-features">
              <div>
                <p>ENVIRONMENT</p>
                <h5>Clean and Airy</h5>
              </div>
              <div>
                <p>CLASSES</p>
                <h5>Every Level</h5>
              </div>
              <div>
                <p>PRICES</p>
                <h5>Affordable</h5>
              </div>
            </div>
            <div className="custom-btn">
              <button>
                <Link>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
