import React from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClasses = () => {
  const classes = useLoaderData();
  const { _id, price, availableSeat, classPic, className } = classes;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classPic = form.classPic.value;
    const availableSeat = form.availableSeat.value;
    const price = form.price.value;

    const updatedClass = {
      className,
      classPic,
      availableSeat,
      price,
    };
    console.log(updatedClass);

    // send data to server starts
    fetch(`http://localhost:5000/myclasses/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Class updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    // send data to server end
  };
  return (
    <div>
      <h2>This is updated classes</h2>
      <Form onSubmit={handleUpdate}>
        <div className="form-area">
          <div>
            <Form.Group className="mb-3" controlId="className">
              <Form.Label>Class Name</Form.Label>
              <Form.Control
                type="text"
                name="className"
                placeholder="Enter class name"
                defaultValue={className}
              />
            </Form.Group>
          </div>

          <div>
            <Form.Group className="mb-3" controlId="classPic">
              <Form.Label>Class Picture URL</Form.Label>
              <Form.Control
                type="text"
                name="classPic"
                placeholder="Enter class image url"
                defaultValue={classPic}
              />
            </Form.Group>
          </div>

          <div>
            <Form.Group className="mb-3" controlId="availableSeat">
              <Form.Label>Available seat</Form.Label>
              <Form.Control
                type="number"
                name="availableSeat"
                placeholder="available seat"
                defaultValue={availableSeat}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Price"
                defaultValue={price}
              />
            </Form.Group>
          </div>
        </div>
        <div className="update-now-btn">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateClasses;
