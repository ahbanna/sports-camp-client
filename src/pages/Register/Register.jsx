import React, { useContext } from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Slide } from "react-awesome-reveal";
const Register = () => {
  // TODO reset have to apply
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const newUser = result.user;
      console.log(newUser);
      // update user
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("User profile updated");
          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photoURL,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                // sweet alert starts
                Swal.fire({
                  title: "Successfully sign up",
                  icon: "success",
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
      // // sweet alert starts
      // const Toast = Swal.mixin({
      //   toast: true,
      //   position: "center",
      //   showConfirmButton: false,
      //   timer: 2000,
      //   timerProgressBar: true,
      //   didOpen: (toast) => {
      //     toast.addEventListener("mouseenter", Swal.stopTimer);
      //     toast.addEventListener("mouseleave", Swal.resumeTimer);
      //   },
      // });

      // Toast.fire({
      //   icon: "success",
      //   title: "Signed in successfully",
      // });
      // // sweet alert end
    });
  };
  return (
    <div className="register-area">
      <div className="container w-50 mx-auto">
        <Slide triggerOnce>
          <h3 className="main-heading">Please Register!</h3>
        </Slide>

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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Photo URL"
              {...register("photoURL", { required: true })}
            />
            {errors.photoURL && (
              <span className="text-danger">Photo is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
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
          <div className="register-btn">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
          <div>
            <Form.Text>
              Already have an account? <Link to="/login">Login</Link>
            </Form.Text>
          </div>
          <SocialLogin></SocialLogin>
        </Form>
      </div>
    </div>
  );
};

export default Register;
