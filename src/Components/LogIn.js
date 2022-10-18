import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import AuthContext from "../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LogIn = () => {
  const { SignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const LoginHandle = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await SignIn(email, password);
      Navigate("/wallet");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };

  return (
    <section className="forAll py-5 vh-100">
      <div className="container only py-5">
        <h1 className="text-center ">Login to your account</h1>
        <p className="text-center py-3 text-danger">{error}</p>
        <div className="container">
          <Form onSubmit={LoginHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Form.Group>
            <button className="button mt-5 py-2" type="submit">
              Log in
            </button>
          </Form>
        </div>
        <h3 className="text-center text-warning mt-3 py-3">
          Register Your Account{" "}
          <Link to="/signup" className="text-warning ms-2 text-underline">
            Sign Up
          </Link>{" "}
        </h3>
      </div>
    </section>
  );
};

export default LogIn;
