import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Card } from "react-bootstrap";
import "./SelectedClasses.css";
import { AuthContext } from "../../../providers/AuthProvider";

const SelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [selectedclass, setSelectedclass] = useState([]);
  const url = `http://localhost:5000/selectedclasses?userEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectedclass(data);
      });
  }, []);

  return (
    <div className="selected-class-area">
      {selectedclass.map((item) => (
        <div className="single-selected-class">
          <div key={item._id}>
            <Card style={{ width: "22rem" }}>
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
                  <button>Delete</button>
                  <button>Pay</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedClasses;
