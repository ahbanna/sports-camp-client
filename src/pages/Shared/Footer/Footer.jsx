import React from "react";
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsFillCalendarXFill } from "react-icons/bs";

import "./Footer.css";
import footerBg from "../../../assets/footer-bg.png";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-bg">
        <img src={footerBg} alt="" />
      </div>
      <div className="footer-container" data-aos="zoom-in-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h3>About Sports Camp</h3>
              <p>
                Enhance skills, teamwork & sportsmanship! Join a program led by
                professionals, where young athletes can immerse themselves in
                training, competitions, fostering personal growth and a love for
                sports.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 quick-links-area">
              <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Home</a>
                  </li>
                </ul>
              </div>
              <div className="social-link">
                <h4>Follow us :</h4>
                <ul className="social-icon">
                  <li>
                    <a href="https://facebook.com/home">
                      <FaFacebookF></FaFacebookF>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/home">
                      <FaTwitter></FaTwitter>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <FaInstagram></FaInstagram>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.behance.net/">
                      <FaBehance></FaBehance>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h3>Location & Hours</h3>
                <ul>
                  <li>
                    <div className="footer-icon">
                      <IoHome></IoHome>
                    </div>
                    Dhaka, Bangladesh
                  </li>
                  <li>
                    <div className="footer-icon">
                      <FaPhoneAlt></FaPhoneAlt>
                    </div>
                    Phone: +88 01911 000 000
                  </li>
                  <li>
                    <div className="footer-icon">
                      <FaRegEnvelope></FaRegEnvelope>
                    </div>
                    Email: alhasanulbanna@gmail.com
                  </li>
                  <li>
                    <div className="footer-icon">
                      <FaRegCalendarAlt></FaRegCalendarAlt>
                    </div>
                    Mon – Sat: 6:00 – 12:00
                  </li>
                  <li>
                    <div className="footer-icon">
                      <BsFillCalendarXFill></BsFillCalendarXFill>
                    </div>
                    Sunday – Closed
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-subscribe">
              <h3>Newsletter</h3>
              <p>Enter your email and get latest updates</p>
              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Email"
                />
                <div className="subscribe-btn custom-btn">
                  <button>
                    <input type="submit" value="Subscribe Now" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Sports Camp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
