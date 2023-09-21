import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./PopularInstructors.css";
import { Slide } from "react-awesome-reveal";

const PopularInstructors = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const popularInstructors = data.filter(
          (item) => item.role === "instructor"
        );
        setPopular(popularInstructors);
      });
  }, []);
  return (
    <div className="all-popular-ins-area">
      <div className="section-title">
        <Slide triggerOnce>
          <h3 className="main-heading">Devoted</h3>
        </Slide>
        <h4>Popular Instructors</h4>
        <p>
          Our qualified instructors are always on hand to inspire, encourage and
          share their passion for the beautiful game.
        </p>
      </div>
      <div className="all-popular-ins container" data-aos="zoom-in-down">
        {popular.map((item) => (
          <div key={item._id}>
            <div className="single-popular-ins">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.photo} />
                <Card.Body className="text-center">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <p>
                      <span>Email:</span> {item.email}{" "}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
