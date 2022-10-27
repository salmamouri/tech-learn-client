import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className=" border  m-5 p-5">
      <h1 className="text-danger text-center fw-bold fs-1"> 404</h1>
      <p className="text-danger text-center fs-1 fw-bold">Not Found</p>
    </Container>
  );
};

export default NotFound;
