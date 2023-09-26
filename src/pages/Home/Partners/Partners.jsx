import React from "react";
import "./Partners.css";
import partimg1 from "../../../assets/partners/1.png";
import partimg2 from "../../../assets/partners/2.png";
import partimg3 from "../../../assets/partners/3.png";
import partimg4 from "../../../assets/partners/4.png";
import partimg5 from "../../../assets/partners/5.png";
import partimg6 from "../../../assets/partners/6.png";
import partimg7 from "../../../assets/partners/7.png";
import partimg8 from "../../../assets/partners/8.png";
import partimg9 from "../../../assets/partners/9.png";
const Partners = () => {
  return (
    <div className="partners-area">
      <div className="section-title" data-aos="zoom-in-down">
        <h5>Partners</h5>
        <h2>
          Our<span> Sponsorship</span>
        </h2>
        <p>
          In our relentless pursuit of excellence in sports, we are proud to
          forge meaningful partnerships and collaborations with like-minded
          organizations and sponsors who share our passion and vision.
        </p>
      </div>
      <div className="partners-content container" data-aos="zoom-in">
        <div className="partners-img-first-row">
          <img src={partimg1} alt="" srcset="" />
          <img src={partimg9} alt="" srcset="" />
          <img src={partimg8} alt="" srcset="" />
          <img src={partimg2} alt="" srcset="" />
          <img src={partimg3} alt="" srcset="" />
        </div>
        <div className="partners-img-sec-row">
          <img src={partimg6} alt="" srcset="" />
          <img src={partimg7} alt="" srcset="" />
          <img src={partimg5} alt="" srcset="" />
          <img src={partimg4} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
