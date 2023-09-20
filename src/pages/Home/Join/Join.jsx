// import React from "react";
// import "./Join.css";
// import { Link } from "react-router-dom";

// const Join = () => {
//   return (
//     <div className="join-area">
//       <div className="join-area-bg-overlay"></div>
//       <div className="join-area-content container">
//         <p>Join Our Team</p>
//         <h2>
//           Being The Number <span>#1</span> is Our True Goals
//         </h2>
//         <div className="custom-btn">
//           <button>
//             <Link>JOIN WITH US</Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Join;

import React from "react";
import "./Join.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/join/1.jpg";
import img2 from "../../../assets/join/2.jpg";
import img3 from "../../../assets/join/3.jpg";
import img4 from "../../../assets/join/4.jpg";
import { Link } from "react-router-dom";

const Join = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div className="join-area">
      <div className="join-area-content container">
        <div className="join-area-text">
          <div className="area-title">
            <p>join today</p>
            <h2>
              Sports camp invites you to <span>classes</span>
            </h2>
          </div>
          <p>
            We are an open and friendly swimming school. Each of our little
            floats is special and unique to us. We know each of our students not
            only by name, but most of all we listen to them and try to get to
            know them well. We teach swimming, but also try to pass on moral
            principles and values.
          </p>
          <div className="custom-btn">
            <button>
              <Link>JOIN WITH US</Link>
            </button>
          </div>
        </div>
        <div className="join-area-slider">
          <Slider {...settings}>
            <div>
              <img src={img1} alt="" srcset="" />
            </div>
            <div>
              <img src={img1} alt="" srcset="" />
            </div>
            <div>
              <img src={img1} alt="" srcset="" />
            </div>
            <div>
              <img src={img1} alt="" srcset="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Join;
