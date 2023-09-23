// import React from "react";
// import { Card } from "react-bootstrap";
// import { useLoaderData } from "react-router-dom";
// import "./Instructors.css";

// const Instructors = () => {
//   const Instructors = useLoaderData();
//   return (
//     <div className="instructor-area">
//       <div className="container">
//         <div className="section-title">
//           <h3 className="main-heading">Our Instructors</h3>
//           <p>
//             Our qualified instructors are always on hand to inspire, encourage
//             and share their passion for the beautiful game.
//           </p>
//         </div>
//         <div className="all-instructor">
//           {Instructors.map((Instructor) => (
//             <div className="single-instructor">
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={Instructor.image} />
//                 <Card.Body className="text-center">
//                   <Card.Title>{Instructor.name}</Card.Title>
//                   <Card.Text>
//                     <p>{Instructor.email}</p>
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Instructors;

// 2nd
// import React, { useEffect, useState } from "react";
// import { Card } from "react-bootstrap";
// import { useLoaderData } from "react-router-dom";
// import "./Instructors.css";
// import { Slide } from "react-awesome-reveal";
// import useTitle from "../../hooks/useTitle";

// const Instructors = () => {
//   useTitle("All Instructors");
//   const [instructors, setInstructors] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/users")
//       .then((res) => res.json())
//       .then((data) => {
//         const popularInstructors = data.filter(
//           (item) => item.role === "instructor"
//         );
//         setInstructors(popularInstructors);
//       });
//   }, []);
//   return (
//     <div className="instructor-area">
//       <div className="container">
//         <div className="section-title">
//           <Slide triggerOnce>
//             <h3 className="main-heading">Our Qualified Instructors</h3>
//           </Slide>

//           <p>
//             Our qualified instructors are always on hand to inspire, encourage
//             and share their passion for the beautiful game.
//           </p>
//         </div>
//         <div className="all-instructor">
//           {instructors.map((Instructor) => (
//             <div className="single-instructor">
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={Instructor.photo} />
//                 <Card.Body className="text-center">
//                   <Card.Title>{Instructor.name}</Card.Title>
//                   <Card.Text>
//                     <p>{Instructor.email}</p>
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Instructors;

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./Instructors.css";
import useTitle from "../../hooks/useTitle";
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaDribbble,
  FaGoogle,
  FaFacebookF,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegCalendarAlt,
} from "react-icons/fa";

const Instructors = () => {
  useTitle("All Instructors");
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const popularInstructors = data.filter(
          (item) => item.role === "instructor"
        );
        setInstructors(popularInstructors);
      });
  }, []);
  return (
    <div className="instructor-area">
      <div className="container">
        <div className="area-title" data-aos="zoom-in">
          <h5>Our Instructors</h5>
          <h2>
            Our Qualified <span>Instructors</span>
          </h2>
          <p>
            Our qualified instructors are always on hand to inspire, encourage
            and share their passion for the beautiful game.
          </p>
        </div>

        <div className="all-instructor">
          {instructors.map((Instructor) => (
            <div className="single-instructor">
              <Card style={{ width: "18rem" }} className="image">
                <Card.Img variant="top" src={Instructor.photo} />
                <div className="content">
                  <Card.Body className="text-center">
                    <Card.Title>{Instructor.name}</Card.Title>
                    <Card.Text>
                      <p>{Instructor.email}</p>
                    </Card.Text>
                  </Card.Body>
                </div>
                {/* <div className="social-link"> */}
                <ul className="social">
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
                {/* </div> */}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
