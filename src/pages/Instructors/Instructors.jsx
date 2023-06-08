import React from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./Instructors.css";

const Instructors = () => {
  const Instructors = useLoaderData();
  return (
    <div className="instructor-area">
      <div className="container">
        <div className="section-title">
          <h3 className="heading-title">Our Instructors</h3>
          <p>
            Our qualified instructors are always on hand to inspire, encourage
            and share their passion for the beautiful game.
          </p>
        </div>
        <div className="all-instructor">
          {Instructors.map((Instructor) => (
            <div className="single-instructor">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Instructor.image} />
                <Card.Body className="text-center">
                  <Card.Title>{Instructor.name}</Card.Title>
                  <Card.Text>
                    <p>{Instructor.email}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
