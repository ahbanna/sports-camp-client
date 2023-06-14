import React, { useEffect, useState } from "react";
import "./PopularClasses.css";
import { Slide } from "react-awesome-reveal";
import { Card } from "react-bootstrap";
const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("https://uppity-ants-production.up.railway.app/allclasses")
      .then((res) => res.json())
      .then((data) => {
        const slicedData = data.slice(0, 6);
        setPopularClasses(slicedData);
      });
  }, []);
  return (
    <div className="popular-class-area">
      <div className="section-title">
        <Slide triggerOnce>
          <h3 className="main-heading">Best</h3>
        </Slide>
        <h4>Popular Classes</h4>
      </div>
      <div className="popular-class container">
        {popularClasses.map((item) => (
          <div key={item._id}>
            <div className="single-popular-ins">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={item.classPic} />
                <Card.Body className="text-center">
                  <Card.Title>{item.className}</Card.Title>
                  <Card.Text>
                    <p>
                      <span>Instructor Name:</span> {item.InstructorName}
                    </p>
                    <p>
                      <span>Email:</span> {item.email}
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

export default PopularClasses;
