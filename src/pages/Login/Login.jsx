import React, { useContext } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
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
