import React from "react";
import "./SportsCategories.css";
import { Button, Card } from "react-bootstrap";
import image1 from "../../../assets/sports categories/image1.png";
import image2 from "../../../assets/sports categories/image2.png";
import image3 from "../../../assets/sports categories/image3.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const SportsCategories = () => {
  return (
    <div className="sports-cat-area">
      <div className="sports-cat-area-content container">
        <div className="section-title" data-aos="zoom-out-up">
          <h5>Sports Categories</h5>
          <h2>
            Our Categories Of
            <span> Sports</span>
          </h2>
          <p>
            Embark on an exhilarating adventure through our diverse sports
            programs. Whether you're enthusiastic about tennis, football,
            skiing, or any other sport, our offerings cater to all.
          </p>
        </div>
        <div className="all-categories">
          <div
            className="single-category"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Card style={{ width: "25rem" }}>
              <div className="cat-img">
                <Card.Img variant="top" src={image1} />
                <span>Skiing</span>
              </div>
              <Card.Body>
                <Card.Title>Cross-Country Skiing</Card.Title>
                <Card.Text>
                  A winter sport gliding down snow-covered slopes, combining
                  speed, and mountain adventure.
                </Card.Text>
                <Link to="/classes">
                  View More <BsArrowRight></BsArrowRight>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div
            className="single-category"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Card style={{ width: "25rem" }}>
              <div className="cat-img">
                <Card.Img variant="top" src={image2} />
                <span>Surfing</span>
              </div>
              <Card.Body>
                <Card.Title>Surfing With Fun</Card.Title>
                <Card.Text>
                  Ride waves on a board, thrilling water sport blending balance,
                  agility, and connection with nature.
                </Card.Text>
                <Link to="/classes">
                  View More <BsArrowRight></BsArrowRight>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div
            className="single-category"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Card style={{ width: "25rem" }}>
              <div className="cat-img">
                <Card.Img variant="top" src={image3} />
                <span>Swimming</span>
              </div>
              <Card.Body>
                <Card.Title>Dive into Serenity</Card.Title>
                <Card.Text>
                  A graceful activity, propelling through water with strokes for
                  exercise, competition, and leisure.
                </Card.Text>
                <Link to="/classes">
                  View More <BsArrowRight></BsArrowRight>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCategories;
