import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Classes.css";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(user.email);

  useEffect(() => {
    fetch("https://sports-camp-server.vercel.app/allclasses")
      .then((res) => res.json())
      .then((data) => {
        const approvedClasses = data.filter(
          (item) => item.status === "approve"
        );
        setClasses(approvedClasses);
      });
  }, []);

  const handleSelect = (selectedClass) => {
    const dataToSend = {
      ...selectedClass,
      userEmail: user.email,
    };

    axios
      .post("https://sports-camp-server.vercel.app/selectedclasses", dataToSend)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // sweet alert starts
          Swal.fire({
            title: "Selected successfully",
            icon: "success",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // POST api for select class as a student end

  return (
    <div className="approved-class-area container">
      <Slide triggerOnce>
        <h3 className="main-heading text-center">Approved Classes</h3>
      </Slide>

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
                    <button onClick={() => handleSelect(item)}>Select</button>

                    {/* <Link to="/dashboard/selectedclasses">
                      <button onClick={() => handleSelect(item)} item={item}>
                        Select
                      </button>
                    </Link> */}
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
