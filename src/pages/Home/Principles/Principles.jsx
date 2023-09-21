import React, { useEffect } from "react";
import "./Principles.css";
import { Card } from "react-bootstrap";
import { AiOutlineLineChart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdSportsBaseball } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import "aos/dist/aos.css"; // Import the CSS for animations
import AOS from "aos"; // Import the AOS library

const Principles = () => {
  useEffect(() => {
    AOS.init({
      // Global settings go here
    });
  }, []);
  return (
    <div className="principles-area">
      <div className="principles-area-content container">
        <div className="area-title" data-aos="zoom-in" data-aos-duration="8500">
          <p>Sports Camp</p>
          <h2>
            Our <span>Principles</span>
          </h2>
        </div>
        <div className="all-principles">
          <div
            className="single-principle"
            data-aos="fade-right"
            data-aos-duration="6500"
          >
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <AiOutlineLineChart></AiOutlineLineChart>
                <Card.Title>Proficiency</Card.Title>
                <Card.Text>
                  We provide expert coaching and guidance to help participants
                  enhance their proficiency in their chosen sports. Through
                  focused training, drills, and practice, participants develop
                  the skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="single-principle" data-aos="fade-up">
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <FaShareAlt></FaShareAlt>
                <Card.Title>Participation</Card.Title>
                <Card.Text>
                  Our camp encourages all participants to get involved, no
                  matter their skill level. We create an inclusive atmosphere
                  where everyone feels valued and supported.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="single-principle" data-aos="fade-up">
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <MdSportsBaseball></MdSportsBaseball>
                <Card.Title>Lessons</Card.Title>
                <Card.Text>
                  Every moment at our camp is an opportunity to learn. We
                  provide a dynamic learning environment where participants gain
                  not only physical skills but also valuable life lessons.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div
            className="single-principle"
            data-aos="fade-left"
            data-aos-duration="8500"
          >
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <FiUsers></FiUsers>
                <Card.Title>Teamwork</Card.Title>
                <Card.Text>
                  Teamwork makes the dream work! We emphasize the importance of
                  collaboration and working together toward a common goal and
                  collective effort of the team.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
