import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Card } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import "./EnrolledClasses.css";
import useTitle from "../../../hooks/useTitle";

const EnrolledClasses = () => {
  useTitle("Enrolled Classes");
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payments?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClasses(data);
      });
  }, []);
  return (
    <div>
      <Slide triggerOnce>
        <div className="section-title text-center">
          <h3 className="main-heading">My Enrolled Classes</h3>
        </div>
      </Slide>
      <div className="enrolled-class-area">
        {enrolledClasses.map((item) => (
          <div className="single-enrolled-class">
            <div key={item._id}>
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={item.classPic} />
                <Card.Body className="text-center">
                  <Card.Title>{item.className}</Card.Title>
                  <Card.Text>
                    <p>
                      <span>Instructor Name: </span> {item.instructorName}
                    </p>
                    <p>
                      <span>Instructor Email: </span> {item.email}
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

export default EnrolledClasses;
