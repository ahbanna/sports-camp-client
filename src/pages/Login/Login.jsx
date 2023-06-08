import React, { useContext } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  // navigate starts.it use when user successfully login go to desire page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // navigate end
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const loginUser = result.user;
      console.log(loginUser);
      // sweet alert starts
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Login successfully",
      });
      // sweet alert end
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="login-area">
      <div className="container w-50 mx-auto">
        <h3 className="heading-title">Please Login!</h3>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div>
            <Form.Text>
              Don't have an account? <Link to="/register">Register</Link>
            </Form.Text>
            <p className="text-success"></p>
            <p className="error-msg"></p>
          </div>
        </Form>
        <div className="google-login">
          <h4>OR</h4>
          <Button onClick="">
            <FaGoogle></FaGoogle> Login With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
