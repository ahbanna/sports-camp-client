import React from "react";
import "./Social.css";
import { FaBehance, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import soicalimg1 from "../../../assets/social-img1.jpg";
import soicalimg2 from "../../../assets/social-img2.jpg";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="social-area" data-aos="zoom-in-down">
      <div className="social-area-content container">
        <div className="social-left">
          <div className="section-title">
            <h5>Social Media</h5>
            <h2>
              Keep Update to Our <span>Social Channel</span>
            </h2>
          </div>
          <p>
            Are you ready to dive headfirst into the exciting world of sports at
            our camp? To make sure you're always in the loop and never miss a
            beat, be sure to stay connected with us on our vibrant social media
            channels. We're not just a sports camp; we're a community, and our
            social channels are the perfect way to keep up with all the action,
            news, and updates.
          </p>
          <div className="social-link">
            <ul className="social-icon">
              <li>
                <a href="https://facebook.com/home">
                  <FaFacebook></FaFacebook>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/home">
                  <FaTwitter></FaTwitter>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram></FaInstagram>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/">
                  <FaBehance></FaBehance>
                  <span>Behance</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="custom-btn">
            <button>
              <Link to="https://www.youtube.com/" target="_blank">
                subscribe now
              </Link>
            </button>
          </div>
        </div>
        <div className="social-right">
          <div className="socialimg2">
            <img src={soicalimg2} alt="" />
          </div>
          <div className="socialimg1">
            <img src={soicalimg1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
