import React from "react";
import { Card } from "react-bootstrap";
import "./MyClassesCard.css";
import { Link } from "react-router-dom";

const MyClassesCard = ({ myClass }) => {
  const { className, classPic, price, status, _id } = myClass;
  return (
    <div className="single-class">
      <Card style={{ width: "23rem" }}>
        <Card.Img variant="top" src={classPic} />
        <Card.Body className="text-center">
          <Card.Title>{className}</Card.Title>
          <Card.Text>
            <p>
              <span>Price: </span>
              {price}
            </p>
            <p>
              <span>Status: </span>
              {status}
            </p>
            <p>
              <span>Total Enrolled Students: </span>
            </p>
            <p>
              <span>Feedback: </span>
            </p>
            {/* TODO: update button design */}
            <Link to={`${_id}`}>
              <button className="update-btn">Update</button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyClassesCard;
