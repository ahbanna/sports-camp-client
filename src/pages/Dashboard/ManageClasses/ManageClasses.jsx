import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Card } from "react-bootstrap";
import "./ManageClasses.css";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("https://sports-camp-server.vercel.app/allclasses");
    return res.json();
  });

  // Manage class approve or denay
  const handleMakeStatus = (classId, status) => {
    fetch(
      `https://sports-camp-server.vercel.app/allclasses/${status}/${classId}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${status}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Slide triggerOnce>
        <h3 className="main-heading text-center">Manage Classes</h3>
      </Slide>
      <div className="all-classes">
        {classes.map((cla) => (
          <div className="single-class">
            <Card style={{ width: "23rem" }} key={cla._id}>
              <Card.Img variant="top" src={cla.classPic} />
              <Card.Body className="text-center">
                <Card.Title>{cla.className}</Card.Title>
                <Card.Text>
                  <p>
                    <span>Instructor: </span> {cla.InstructorName}
                  </p>
                  <p>
                    <span>Instructor Email: </span> {cla.email}
                  </p>
                  <p>
                    <span>Available seats: </span> {cla.availableSeat}
                  </p>
                  <p>
                    <span>Price: </span>
                    {cla.price}
                  </p>
                  <p>
                    <span>Status: </span>
                    {cla.status}
                  </p>
                  <p className="ads-btn">
                    <button
                      onClick={() => handleMakeStatus(cla._id, "approve")}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleMakeStatus(cla._id, "deny")}
                      className="mx-2"
                    >
                      Denay
                    </button>
                    <button>Send Feedback</button>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
