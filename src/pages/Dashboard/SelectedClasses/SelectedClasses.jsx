import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./SelectedClasses.css";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const SelectedClasses = () => {
  useTitle("Selected Classes");
  const { user } = useContext(AuthContext);
  //payment start
  const navigate = useNavigate();
  // payment end
  const [selectedclass, setSelectedclass] = useState([]);
  const url = `https://sports-camp-server-unqt1ouq2-ahbanna.vercel.app/selectedclasses?userEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSelectedclass(data);
      });
  }, []);

  // delete start
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
        fetch(
          `https://sports-camp-server-unqt1ouq2-ahbanna.vercel.app/selectedclasses/${_id}`,
          {
            method: "DELETE",
          }
        )
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
    <div>
      <Slide triggerOnce>
        <div className="section-title2 text-center">
          <h3 className="main-heading">My Selected Classes</h3>
        </div>
      </Slide>
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
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                    <Link
                      to="/dashboard/payment"
                      state={{
                        price: item.price,
                        instructorName: item.InstructorName,
                        email: item.email,
                        userEmail: item.userEmail,
                        className: item.className,
                        classPic: item.classPic,
                        availableSeat: item.availableSeat,
                        classId: item._id,
                      }}
                      onClick={() => navigate("/dashboard/payment")}
                    >
                      <button>Pay</button>
                    </Link>
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

export default SelectedClasses;
