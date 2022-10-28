import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              width="80px"
              src="https://i.ibb.co/NW9W3ZJ/learn-tech.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none" to="/courses">
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none" to="/faq">
                  FAQ
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link className="text-decoration-none me-2" to="/login">
                      Login
                    </Link>
                    <Link className="text-decoration-none" to="/register">
                      Sign Up
                    </Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2}>
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
