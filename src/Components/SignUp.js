import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../ContextApi/AuthContext";
import "./Signin.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      Navigate("/");
      alert("Your account is now register");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <section className="forAll vh-100 py-5">
      <div className="container only py-5">
        <h1 className="text-center py-3">Register Your Account</h1>
        <p className="text-center py-3 text-danger">{error}</p>
        <div className="container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              value={contact}
              type="number"
              placeholder="Enter your phone number"
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </Form.Group> */}

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Form.Group>
            <button value={password} className="button py-2 mt-5" type="submit">
              Sign up
            </button>
          </Form>
        </div>
        <h3 className="text-center mt-3 py-3">
          You have Already Account ? yet{" "}
          <Link to="/" className="text-warning ms-2 text-underline">
            Login
          </Link>{" "}
        </h3>
      </div>
    </section>
  );
};

export default SignUp;
