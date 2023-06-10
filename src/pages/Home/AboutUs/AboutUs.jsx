import React from "react";
import aboutImg from "../../../assets/about.png";
import aboutImg2 from "../../../assets/about2.png";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-area">
      <div
        className="about-img"
        style={{ backgroundImage: `url(${aboutImg2})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>About Us</h2>
                <p>
                  Welcome to our summer sports camp! We offer cricket, football,
                  table tennis, baseball, tennis, badminton, boxing, and more.
                  Led by experienced instructors, our camp provides fun-filled
                  training to students of all skill levels. Join us for a
                  memorable summer of sports, teamwork, and personal growth.
                  Discover your athletic potential and make lasting friendships
                  in a safe and supportive environment. Get ready for an
                  exciting and enriching sports camp experience!
                </p>
                <div className="custom-btn">
                  <button>
                    <Link>Learn More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
