import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import "./AddClass.css";
import { Slide } from "react-awesome-reveal";
import useTitle from "../../../hooks/useTitle";

const AddClass = () => {
  useTitle("Add Class");
  const { user } = useContext(AuthContext);
  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classPic = form.classPic.value;
    const InstructorName = form.InstructorName.value;
    const email = form.email.value;
    const availableSeat = form.availableSeat.value;
    const price = form.price.value;

    const newClass = {
      className,
      classPic,
      InstructorName,
      email,
      availableSeat,
      price,
      status: "pending",
    };
    console.log(newClass);

    // send data to server starts
    fetch(
      "https://sports-camp-server-unqt1ouq2-ahbanna.vercel.app/allclasses",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newClass),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Class added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    // send data to server end
  };
  return (
    <div className="add-class-area">
      {/* TODO: form design */}
      <div className="container">
        <Slide triggerOnce>
          <div className="section-title text-center">
            <h3 className="main-heading">Add A Class</h3>
          </div>
        </Slide>
        <div>
          <Form onSubmit={handleAddClass}>
            <div className="form-area">
              <div className="d-flex">
                <div className="w-100 mx-4">
                  <Form.Group className="mb-3" controlId="className">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="className"
                      placeholder="Enter class name"
                    />
                  </Form.Group>
                </div>
                <div className="w-100">
                  <Form.Group className="mb-3" controlId="classPic">
                    <Form.Label>Class Picture URL</Form.Label>
                    <Form.Control
                      type="text"
                      name="classPic"
                      placeholder="Enter class image url"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="d-flex">
                <div className="w-100 mx-4">
                  <Form.Group className="mb-3" controlId="InstructorName">
                    <Form.Label>Instructor Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="InstructorName"
                      placeholder="Instructor name"
                      defaultValue={user.displayName}
                    />
                  </Form.Group>
                </div>

                <div className="w-100">
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Instructor Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Seller Email"
                      defaultValue={user.email}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="d-flex">
                <div className="w-100 mx-4">
                  <Form.Group className="mb-3" controlId="availableSeat">
                    <Form.Label>Available seat</Form.Label>
                    <Form.Control
                      type="number"
                      name="availableSeat"
                      placeholder="available seat"
                    />
                  </Form.Group>
                </div>
                <div className="w-100">
                  <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      placeholder="Price"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <div className="add-class-submit-btn">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
