import React from "react";
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaDribbble,
  FaGoogle,
} from "react-icons/fa";
import "./Footer.css";
import footerBg from "../../../assets/footer-bg.png";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-bg">
        <img src={footerBg} alt="" />
      </div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3>About Sports Camp</h3>
              <p>
                We believe that education can be fun, engaging, and exciting.
                Our mission is to provide a wide range of high-quality
                educational toys that not only entertain but also inspire young
                minds.
              </p>
            </div>
            <div className="col-lg-3">
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
                    <a href="https://twitter.com/home">
                      <FaTwitter></FaTwitter>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.behance.net/">
                      <FaBehance></FaBehance>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <FaInstagram></FaInstagram>
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/">
                      <FaDribbble></FaDribbble>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/account/about/">
                      <FaGoogle></FaGoogle>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-contact">
                <h3>Location & Hours</h3>
                <ul>
                  <li>Mon – Sat: 6:00 – 12:00 </li>
                  <li>Sunday – Closed</li>
                  <br />
                  <li>Dhaka, Bangladesh</li>
                  <li>Phone: +88 01911 000 000</li>
                  <li>Email: alhasanulbanna@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 footer-subscribe">
              <h3>Newsletter</h3>
              <p>
                Enter your email and get latest updates and offers subscribe us
              </p>
              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Email"
                />
                <div className="submit-btn">
                  <input type="submit" value="Subscribe Now" />
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
