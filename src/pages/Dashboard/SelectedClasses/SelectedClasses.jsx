import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./SelectedClasses.css";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";

const SelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [selectedclass, setSelectedclass] = useState([]);
  const url = `http://localhost:5000/selectedclasses?userEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSelectedclass(data);
      });
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedclasses/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
              const remaining = selectedclass.filter(
                (myClass) => myClass._id !== _id
              );
              setSelectedclass(remaining);
            }
          });
      }
    });
  };
  // delete end

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
                  <p>
                    <span>ID</span> {item._id}
                  </p>
                  {/* TODO: btn design */}
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
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
