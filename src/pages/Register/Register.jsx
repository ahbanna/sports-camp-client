import React from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Register = () => {
  // TODO reset have to apply
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="register-area">
      <div className="container w-50 mx-auto">
        <h3 className="heading-title">Please Register!</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">Email is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                required: true,
                minLength: 6,
                maxLength: 9,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
              })}
            />
            {errors.password && (
              <span className="text-danger">
                Password requires at least 6 characters, one uppercase, and one
                special character
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"), // Check if the value matches the password field
              })}
            />
            {errors.confirmPassword && (
              <span className="text-danger">
                {errors.confirmPassword.type === "required"
                  ? "Confirm Password is required"
                  : "Passwords do not match"}
              </span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <div>
            <Form.Text>
              Already have an account? <Link to="/login">Login</Link>
            </Form.Text>
            <p className="text-success"></p>
            <p className="error-msg"></p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
