import React, { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [error, setError] = useState("");

  const [accepted, setAccepted] = useState(false);

  const handleUpdateProfileUser = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoUrl: photoUrl,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    // console.log(email, password, name, photoUrl);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateProfileUser(name, photoURL);
        toast.success("Please verify your email address");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleAccept = (e) => {
    setAccepted(e.target.checked);
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <Container className="  p-5">
      <Row>
        <Col lg="7" className="w-50">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Your PhotoUrl</Form.Label>
              <Form.Control type="" name="photoURL" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleAccept}
                type="checkbox"
                label={
                  <>
                    Accept{" "}
                    <Link to="/terms&conditions">Terms & Conditions</Link>
                  </>
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
              Register
            </Button>
            <Form.Text className="text-danger">{error}</Form.Text>
          </Form>
          <p className="m-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Col>
        <Col lg="5">
          <div className=" m-5">
            <ButtonGroup vertical>
              <Button
                onClick={handleGoogleSignIn}
                className="mb-2"
                variant="outline-primary"
              >
                <FaGoogle className="me-2"></FaGoogle>
                SignUp with Google
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
