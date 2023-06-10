import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Classes.css";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  //
  // const [isAdmin, setIsAdmin] = useState(false);
  //
  useEffect(() => {
    fetch("http://localhost:5000/allclasses")
      .then((res) => res.json())
      .then((data) => {
        const approvedClasses = data.filter(
          (item) => item.status === "approve"
        );
        setClasses(approvedClasses);
      });
  }, []);
  //
  // useEffect(() => {
  //   fetch("http://localhost:5000/users/admin")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setIsAdmin(data);
  //       const checkAdmin = data.filter((item) => item.role === "admin");
  //       setIsAdmin(checkAdmin);
  //     });
  // }, []);
  //
  return (
    <div className="approved-class-area container">
      <h3 className="main-heading text-center">Approved Classes</h3>
      <div className="all-approved-class">
        {classes.map((item) => (
          <div className="single-approved-class">
            <div key={item._id}>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={item.classPic} />
                <Card.Body className="text-center">
                  <Card.Title>{item.className}</Card.Title>
                  <Card.Text>
                    <p>
                      <span>Instructor: </span> {item.InstructorName}
                    </p>
                    <p>
                      <span>Available seats: </span> {item.availableSeat}
                    </p>
                    <p>
                      <span>Price: </span>
                      {item.price}
                    </p>
                    <button>Select</button>
                    {/* <button disabled={isAdmin}>Select</button> */}
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

export default Classes;
